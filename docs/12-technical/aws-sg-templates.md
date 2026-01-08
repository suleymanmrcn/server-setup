---
title: AWS SG Kural Template
sidebar_position: 21
---

AWS icin pratik security group kural seti ornekleri.

## Bastion SG
- Inbound: 22/2222 sadece ofis/VPN IP
- Outbound: gerekli servisler

## App SG
- Inbound: sadece ALB SG -> 80/443
- Outbound: DB subneti -> 5432

## DB SG
- Inbound: sadece app SG -> 5432
- Outbound: kapali veya gerekli servisler
