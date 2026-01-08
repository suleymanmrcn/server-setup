---
title: Cloud Ag Temelleri (Ortak)
sidebar_position: 9
---

Bu sayfa, AWS ve Oracle icin ortak ag prensiplerini ozetler.

## VPC / VCN
- Mantiksal ag izolasyonu.
- Uretim ve test ortamlarini ayir.

## Subnet
- Public subnet: LB veya bastion.
- Private subnet: app ve DB.

## Route Table
- Public subnet: Internet Gateway route.
- Private subnet: NAT Gateway route.

## Security Group vs NACL
- SG: stateful, instance bazli.
- NACL: stateless, subnet bazli.

## Flow Logs
- Trafik gorunurlugu ve audit icin aktif et.

## HA ve Multi-AZ
- Kritik servislerde Multi-AZ.
- Tek zone tek noktadir.
