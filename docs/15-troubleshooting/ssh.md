---
title: SSH Sorunlari
sidebar_position: 2
---

## Belirti
- Baglanti reddedildi
- Port acik gorunmuyor
- Key mismatch

## Hizli Kontrol
```sh
ss -lntp | grep sshd
journalctl -u sshd -f
```

## Olasi Sebepler
- Port degisti ama firewall acilmadi
- Password auth kapali, anahtar yok
- sshd_config hatali

## Cozum Akisi
1. `sshd -t` ile config testi
2. Firewall kuralini kontrol et
3. Port dogrula
