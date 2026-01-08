---
title: CentOS Guvenlik Sertlestirme
sidebar_position: 2
---

CentOS icin firewalld ve SELinux sertlestirme adimlarini ozetler.

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
getenforce
```

## Kontrol Listesi
- [ ] SSH anahtar tabanli
- [ ] firewalld aktif
- [ ] SELinux enforcing
