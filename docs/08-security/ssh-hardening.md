---
title: SSH Sertlestirme ve Port Degisimi
sidebar_position: 1
---

SSH erisimini uretim icin guvenli hale getirir.

## Minimum Policy
- Root login kapali
- Password auth kapali
- Anahtar tabanli erisim
- Port degisikligi (istege bagli)

## Ornek Konfig
```ini
# /etc/ssh/sshd_config
Port 2222
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

## Uygulama
```sh
sudo sshd -t
sudo systemctl reload sshd
```

## Dogrulama
```sh
ss -lntp | grep sshd
```

## Sik Hatalar
- Port degistirip firewall acmamak
- Root kapatip sudo kullanici olmamasi
