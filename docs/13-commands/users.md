---
title: Kullanici ve Yetki Komutlari
sidebar_position: 4
---

## Kullanici
```sh
sudo useradd -m opsuser
sudo passwd opsuser
```

## Sudo
```sh
# Ubuntu
sudo usermod -aG sudo opsuser

# RHEL tabanli
sudo usermod -aG wheel opsuser
```
