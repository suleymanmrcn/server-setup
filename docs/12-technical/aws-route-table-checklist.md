---
title: AWS Route Table Checklist
sidebar_position: 23
---

AWS route table dogrulama kontrol listesi.

## Public Subnet
- [ ] 0.0.0.0/0 -> IGW
- [ ] Bastion/LB subneti

## Private Subnet
- [ ] 0.0.0.0/0 -> NAT Gateway
- [ ] DB subneti public route icermiyor

## Not
Yanlis route, servis kesintisine neden olur.
