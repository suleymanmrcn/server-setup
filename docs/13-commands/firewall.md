---
title: Firewall Komutlari
sidebar_position: 3
---

## UFW (Ubuntu)
```sh
sudo ufw default deny incoming
sudo ufw allow 2222/tcp
sudo ufw enable
```

## firewalld (RHEL tabanli)
```sh
sudo firewall-cmd --add-port=2222/tcp --permanent
sudo firewall-cmd --reload
```
