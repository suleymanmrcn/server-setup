---
title: Oracle NSG ve Security List
sidebar_position: 16
---

Oracle Cloud tarafinda NSG ve Security List farkini ozetler.

## NSG
- Instance bazli
- Stateful
- Guvenlik politikasi daha esnek

## Security List
- Subnet bazli
- Stateful
- Daha genis kapsama sahip

## Ornek Kural
- NSG (App): sadece LB NSG -> 80/443
- Security List (Private): sadece app subnet IP araligi
