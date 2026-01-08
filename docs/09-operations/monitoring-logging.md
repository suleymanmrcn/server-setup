---
title: Izleme ve Log Yonetimi
sidebar_position: 2
---

Metrik, log ve alarm altyapisini uretime uygun kurar.

## Minimum Monitoring
- CPU, RAM, disk, network
- Servis sagligi (HTTP, DB)
- Disk doluluk ve inode

## Alert Ornekleri
- CPU > %85 (10dk)
- Disk > %80
- 5xx hata sayisi artisi

## Loglama
- Merkezi log (Loki/ELK)
- Rotasyon ve saklama politikasi
- Auth loglari oncelikli

## Tool Onerileri
| Ihtiyac | Oneri |
| --- | --- |
| Metrik | Prometheus + Grafana |
| Log | Loki veya ELK |
| Alert | Alertmanager |

## Ornek Kontrol
```sh
journalctl -p warning -b
ss -s
```

## Not
Monitoring olmadan uretimde sorun tespiti gecikir.
