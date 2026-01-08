---
title: Oracle NSG Template
sidebar_position: 22
---

Oracle icin pratik NSG/Security List kural setleri.

## Bastion NSG
- Inbound: 22/2222 sadece ofis/VPN IP
- Outbound: gerekli servisler

## App NSG
- Inbound: sadece LB NSG -> 80/443
- Outbound: DB subneti -> 5432

## DB NSG
- Inbound: sadece app NSG -> 5432
- Outbound: kapali veya gerekli servisler
