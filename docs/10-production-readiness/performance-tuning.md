---
title: Performans Ayari ve Kernel Tuning
sidebar_position: 1
---

Uretim oncesi performans iyilestirme ve temel kernel ayarlarini ozetler.

## Sysctl Ornekleri
```sh
# /etc/sysctl.d/99-tuning.conf
net.core.somaxconn = 1024
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_tw_reuse = 1
```

## Limits Ornekleri
```sh
# /etc/security/limits.conf
* soft nofile 65535
* hard nofile 65535
```

## Kontrol
- Load ve IO metrikleri
- Network backlog ve socket limitleri
