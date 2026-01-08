---
title: Ubuntu Guvenlik Sertlestirme
sidebar_position: 2
---

Ubuntu uzerinde SSH, UFW ve AppArmor sertlestirme adimlarini verir.

## SSH
- Root login kapali
- Password auth kapali

## UFW
```sh
sudo ufw default deny incoming
sudo ufw allow 2222/tcp
sudo ufw enable
```

## AppArmor
```sh
sudo aa-status
```

## Kontrol Listesi
- [ ] SSH anahtar tabanli
- [ ] UFW aktif
- [ ] AppArmor profilleri yuklu
