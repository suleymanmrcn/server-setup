---
title: Oracle NAT ve Internet Gateway
sidebar_position: 20
---

Oracle Cloud tarafinda internet erisimi icin IGW ve NAT GW akisi.

## Internet Gateway
- Public subnet icin inbound/outbound internet.
- Route table: 0.0.0.0/0 -> IGW.

## NAT Gateway
- Private subnet icin outbound internet.
- Route table: 0.0.0.0/0 -> NAT GW.

## Ornek Akis
1. Public subnet -> IGW
2. Private subnet -> NAT GW
3. DB subneti internetten izole
