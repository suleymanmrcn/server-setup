---
title: Rocky/Alma Guvenlik Sertlestirme
sidebar_position: 2
---

Rocky/Alma icin firewalld ve SELinux sertlestirme adimlarini verir.

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
