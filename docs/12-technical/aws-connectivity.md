---
title: AWS Baglanti Modelleri (Peering, PrivateLink)
sidebar_position: 13
---

AWS tarafinda VPC arasi baglanti secimlerini ozetler.

## VPC Peering
- Iki VPC arasi ozel baglanti
- Transitive routing yok
- CIDR cakismasi olmaz

## Transit Gateway
- Coklu VPC icin merkezi hub
- Routing ve segmentasyon daha kolay

## PrivateLink
- Servis bazli ozel erisim
- Public IP olmadan servis kullanimi

## Ne Zaman Hangisi?
- Iki VPC: Peering
- Cok VPC: Transit Gateway
- Servis erisimi: PrivateLink
