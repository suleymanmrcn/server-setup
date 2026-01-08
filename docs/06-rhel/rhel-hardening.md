---
title: RHEL Guvenlik Sertlestirme
sidebar_position: 2
---

RHEL icin firewalld ve SELinux policy sertlestirmesini verir.

## SSH
- Root login kapali
- Password auth kapali

## firewalld
```sh
sudo firewall-cmd --add-service=ssh --permanent
sudo firewall-cmd --reload
```

## SELinux
```sh
sestatus
```

## Kontrol Listesi
- [ ] SSH anahtar tabanli
- [ ] firewalld aktif
- [ ] SELinux enforcing
