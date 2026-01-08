---
title: Linux Temel Komutlar
sidebar_position: 2
---

Uretimde en cok kullanilan temel komutlari toplar.

## Sistem Durumu
```sh
uptime
free -h
df -h
```

## Servis Yonetimi
```sh
systemctl status sshd
systemctl restart nginx
```

## Ag ve Portlar
```sh
ip a
ip r
ss -lntp
```

## Loglar
```sh
journalctl -p warning -b
journalctl -u sshd -f
```

## Kullanici ve Yetki
```sh
useradd -m opsuser
usermod -aG sudo opsuser
```

## Dosya Izinleri
```sh
chown -R opsuser:opsuser /opt/app
chmod 750 /opt/app
```
