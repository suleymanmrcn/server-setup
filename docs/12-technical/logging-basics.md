---
title: Loglama Temelleri
sidebar_position: 6
---

Log kaynaklari, temel okuma ve rotasyon pratiklerini ozetler.

## Ana Kaynaklar
- journalctl: systemd loglari
- /var/log: auth.log, syslog, messages

## Hizli Kontrol
```sh
journalctl -p warning -b
journalctl -u sshd -f
ls -lh /var/log
```

## Rotasyon
- logrotate ile boyut kontrolu
- Kritik loglar icin merkezi toplama

## Sorun Tespiti
- Auth hatalari: auth.log / secure
- Servis sorunlari: `journalctl -u <servis>`
- Disk dolumu: log rotate edilmemis olabilir
