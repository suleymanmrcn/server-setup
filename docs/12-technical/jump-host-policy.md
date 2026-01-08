---
title: Bastion / Jump Host Politikasi
sidebar_position: 12
---

Bastion (jump host), uretim sunucularina kontrollu erisim icin kullanilir.

## Politika
- Public erisim sadece bastion uzerinden
- IP allowlist + MFA
- SSH anahtar tabanli erisim
- Root login kapali

## Ag Kurallari
- Bastion: sadece ofis/VPN IP -> 22/2222
- App/DB: sadece bastion subnet -> SSH

## Log ve Audit
- Bastion loglari merkezi toplanir
- Erisim kayitlari saklanir
