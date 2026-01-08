---
title: Boot ve Servis Sorunlari
sidebar_position: 5
---

## Belirti
- Sistem boot olmuyor
- Servis fail durumunda

## Hizli Kontrol
```sh
systemctl --failed
journalctl -b
```

## Olasi Sebepler
- Yanlis fstab
- Kernel update sonrasi sorun
- Servis konfig hatasi

## Cozum Akisi
1. Son degisikligi tespit et
2. Fail eden servisi logdan incele
3. Gerekirse rollback uygula
