---
title: Oracle Cloud Ag Tasarimi
sidebar_position: 11
---

Oracle Cloud icin VCN, subnet ve guvenlik kurallari uzerine pratik notlar.

## VCN
- CIDR planini baslangicta netlestir.
- Prod ve test ayri VCN.

## Subnet
- Public: LB, bastion.
- Private: app, DB.

## Route Table
- Public subnet -> Internet Gateway.
- Private subnet -> NAT Gateway.

## Security List / NSG
- NSG: instance bazli, stateful.
- Security List: subnet bazli.

## Flow Logs
- VCN Flow Logs ile trafik gorunurlugu.

## Ornek Kural
- Bastion NSG: sadece ofis IP -> 22/2222.
- App NSG: sadece LB NSG -> 80/443.
- DB NSG: sadece app NSG -> 5432.
