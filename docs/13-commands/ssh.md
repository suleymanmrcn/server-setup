---
title: SSH Komutlari
sidebar_position: 2
---

## Anahtar Tabanli Erisim
```sh
ssh-keygen -t ed25519
ssh-copy-id user@server
```

## Port Degisimi
```sh
# /etc/ssh/sshd_config
Port 2222
sudo systemctl reload sshd
```

## Kontrol
```sh
ss -lntp | grep sshd
```
