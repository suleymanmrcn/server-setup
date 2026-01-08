---
title: AWS Security Group ve NACL
sidebar_position: 15
---

AWS tarafinda SG ve NACL farkini ve pratik kurallari ozetler.

## Security Group
- Stateful
- Instance bazli
- SG -> SG referansi destekler

## NACL
- Stateless
- Subnet bazli
- In/Out kurallarini birlikte tanimlamak gerekir

## Ornek Kural
- SG (App): sadece ALB SG -> 80/443
- NACL (Private): sadece app subnet IP araligi
