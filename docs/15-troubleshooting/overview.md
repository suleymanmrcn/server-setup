---
title: Troubleshooting Genel Bakis
sidebar_position: 1
---

Uretimde sik gorulen sorunlar icin hizli tani ve cozum akisi verir.

## Genel Akis
1. Loglari kontrol et
2. Son degisiklikleri tespit et
3. Servis durumunu dogrula
4. Geri alma (rollback) planini uygula

## Ilk Bakis Komutlari
```sh
systemctl --failed
journalctl -p warning -b
ss -lntp
```
