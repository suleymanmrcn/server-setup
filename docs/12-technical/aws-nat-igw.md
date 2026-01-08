---
title: AWS NAT ve Internet Gateway
sidebar_position: 19
---

AWS tarafinda internet erisimi icin IGW ve NAT Gateway akisi.

## Internet Gateway (IGW)
- Public subnet icin outbound/inbound internet.
- Route table: 0.0.0.0/0 -> IGW.

## NAT Gateway
- Private subnet icin outbound internet.
- Route table: 0.0.0.0/0 -> NAT GW.

## Ornek Akis
1. Public subnet -> IGW
2. Private subnet -> NAT GW
3. App subneti publice acilmaz
