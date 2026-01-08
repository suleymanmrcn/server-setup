---
title: auditd Temelleri
sidebar_position: 5
---

## Amac
Kritik olaylari izlemek icin auditd kullanimi ve baslangic kurallari.

## Kurulum
- Ubuntu: apt install auditd
- RHEL tabanli: dnf install audit

## Baslangic
- systemctl enable --now auditd
- /etc/audit/rules.d/ icinde kurallar

## Ornek
- Kullanici degisiklikleri ve sudo kullanimi icin audit kural seti
