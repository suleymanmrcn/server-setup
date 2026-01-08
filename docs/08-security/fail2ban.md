---
title: fail2ban
sidebar_position: 4
---

Brute-force denemelerini belirlenen esiklere gore otomatik engeller.

## Kurulum
```sh
# Ubuntu
sudo apt install -y fail2ban

# RHEL tabanli
sudo dnf install -y fail2ban
```

## Temel Yapi
- Ana dosya: `/etc/fail2ban/jail.conf`
- Override: `/etc/fail2ban/jail.local`
- Log kaynaklari: auth.log veya journal

## Minimal jail.local
```ini
[sshd]
enabled = true
port = 2222
maxretry = 5
bantime = 1h
findtime = 10m
```

## Servis Kontrol
```sh
sudo systemctl enable --now fail2ban
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

## Dogrulama
- SSH loglari geliyor mu?
- Yanlis denemede ban olusuyor mu?
- Firewall kuralini fail2ban ekliyor mu?

## Geri Alma
```sh
sudo fail2ban-client stop
```
