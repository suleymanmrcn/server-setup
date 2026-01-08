---
title: Performans Sorunlari
sidebar_position: 6
---

## Belirti
- Yuksek load
- IO darbogazi
- RAM tukendi

## Hizli Kontrol
```sh
uptime
free -h
vmstat 1
```

## Olasi Sebepler
- Leak yapan proses
- Disk IO darboazi
- Yetersiz kaynak

## Cozum Akisi
1. Kaynak tuketen prosesi bul
2. IO ve bellek analiz et
3. Gerekirse scale veya tuning
