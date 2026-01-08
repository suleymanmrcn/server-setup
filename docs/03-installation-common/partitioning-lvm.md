---
title: Bolumlendirme ve LVM
sidebar_position: 2
---

Disk bolumlendirme ve LVM kararlarini uretim icin netlestirir.

## Temel Plan
- /boot: 1G
- /: 20G
- /var: 40G
- /home: 5G
- swap: 2-4G

## Neden /var Ayri?
- Log ve veri buyumesi sistem bolumunu sisirmez.
- Servislerin stabil kalmasini saglar.

## LVM Avantajlari
- Disk genisletme kolayligi
- Snapshot ile geri donus

## Not
Uygulama IO ihtiyaci yuksekse ayrik disk kullan.
