#!/usr/bin/env sh
set -eu

# Quick setup for RHEL/CentOS/Rocky/Alma (production baseline)
# Usage: USER=opsuser SSH_PORT=2222 ./quick-setup-rhel.sh

USER_NAME="${USER:-opsuser}"
SSH_PORT="${SSH_PORT:-2222}"

case "$SSH_PORT" in
  ''|*[!0-9]*)
    echo "SSH_PORT must be numeric." >&2
    exit 1
    ;;
esac

if [ "$SSH_PORT" -lt 1 ] || [ "$SSH_PORT" -gt 65535 ]; then
  echo "SSH_PORT must be between 1 and 65535." >&2
  exit 1
fi

sudo dnf -y update

if id "$USER_NAME" >/dev/null 2>&1; then
  echo "User $USER_NAME already exists. Skipping create."
else
  sudo useradd -m "$USER_NAME"
  sudo passwd "$USER_NAME"
fi

sudo usermod -aG wheel "$USER_NAME"

if [ -f /etc/ssh/sshd_config ]; then
  BACKUP="/etc/ssh/sshd_config.bak.$(date +%Y%m%d%H%M%S)"
  sudo cp /etc/ssh/sshd_config "$BACKUP"
  sudo sed -i "s/^#\\?Port .*/Port ${SSH_PORT}/" /etc/ssh/sshd_config
  sudo sed -i "s/^#\\?PermitRootLogin .*/PermitRootLogin no/" /etc/ssh/sshd_config
  sudo sed -i "s/^#\\?PasswordAuthentication .*/PasswordAuthentication no/" /etc/ssh/sshd_config
  if ! sudo sshd -t; then
    echo "sshd config test failed. Rolling back." >&2
    sudo cp "$BACKUP" /etc/ssh/sshd_config
    exit 1
  fi
else
  echo "/etc/ssh/sshd_config not found. Skipping SSH hardening." >&2
fi
sudo systemctl reload sshd
sudo systemctl is-active --quiet sshd || sudo systemctl status sshd

if [ "$SSH_PORT" -eq 22 ]; then
  sudo firewall-cmd --add-service=ssh --permanent
else
  sudo firewall-cmd --add-port="${SSH_PORT}/tcp" --permanent
fi
sudo firewall-cmd --reload

sudo dnf -y install fail2ban
sudo systemctl enable --now fail2ban

sudo dnf -y install chrony
sudo systemctl enable --now chronyd

uptime
free -h
df -h
journalctl -p warning -b
