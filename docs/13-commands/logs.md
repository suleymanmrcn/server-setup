---
title: Log ve Diagnostik Komutlar
sidebar_position: 6
---

## Loglar
```sh
journalctl -xe
tail -f /var/log/auth.log
```

## Sistem
```sh
dmesg -T | tail
ss -lntp
```
