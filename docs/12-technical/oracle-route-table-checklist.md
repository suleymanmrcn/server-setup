---
title: Oracle Route Table Checklist
sidebar_position: 24
---

Oracle route table dogrulama kontrol listesi.

## Public Subnet
- [ ] 0.0.0.0/0 -> Internet Gateway
- [ ] Bastion/LB subneti

## Private Subnet
- [ ] 0.0.0.0/0 -> NAT Gateway
- [ ] DB subneti internet route icermiyor

## Not
Yanlis route, servis kesintisine neden olur.
