---
title: Depolama ve Disk Plani
sidebar_position: 3
---

Uretimde disk performansi, yedekleme ve genisleme icin plan verir.

## Strateji
- LVM ile esneklik ve snapshot
- /var ayri partition (log ve veri icin)
- IO yuksek ise ayrik disk

## Planlama Sorulari
- Log ve veri ne kadar buyuyecek?
- Snapshot ihtiyaci var mi?
- Backup penceresi nedir?

## Ornek Plan
- /boot: 1G
- /: 20G
- /var: 40G
- /home: 5G
- swap: 2-4G
