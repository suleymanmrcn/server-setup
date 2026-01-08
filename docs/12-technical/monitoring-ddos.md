---
title: Monitoring ve DDoS
sidebar_position: 19
---

Trafik anomali tespiti ve temel DDoS onlemlerini ozetler.

## Temel Gozlem
- Trafik artisi: iftop, nload
- Baglanti sayisi: ss -s
- Response time: uygulama metrikleri

## DDoS Onlemleri
- Rate limit (NGINX/HAProxy)
- L4/L7 koruma servisleri
- Anycast veya CDN

## Ornek
```sh
ss -s
iftop
```
