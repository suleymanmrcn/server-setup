---
title: Ag Sorunlari
sidebar_position: 3
---

## Belirti
- DNS cozumlenmiyor
- Gateway erisimi yok
- Paket kaybi

## Hizli Kontrol
```sh
ip a
ip r
ping 8.8.8.8
```

## Olasi Sebepler
- Yanlis IP/subnet
- DNS kaydi eksik
- Firewall blokluyor

## Cozum Akisi
1. IP ve route dogrula
2. DNS test et (dig/nslookup)
3. Firewall ve SG kontrol et
