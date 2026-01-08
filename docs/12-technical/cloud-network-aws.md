---
title: AWS Ag Tasarimi
sidebar_position: 10
---

AWS icin VPC, subnet ve guvenlik kurallari uzerine pratik notlar.

## VPC
- CIDR planini erken belirle.
- Uretim ve staging ayri VPC.

## Subnet
- Public: ALB, bastion.
- Private: app, DB.

## Route Table
- Public subnet -> Internet Gateway.
- Private subnet -> NAT Gateway.

## Security Group
- Default deny.
- SG kaynaklari diger SG olabilir.

## NACL
- Subnet bazli stateless kontrol.
- In/Out kurallarini birlikte tanimla.

## Flow Logs
- VPC Flow Logs ile trafik audit.

## Ornek Kural
- Bastion SG: sadece ofis IP -> 22/2222.
- App SG: sadece ALB SG -> 80/443.
- DB SG: sadece app SG -> 5432.
