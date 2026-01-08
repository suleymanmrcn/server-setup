---
title: RHEL Kurulum
sidebar_position: 1
---

RHEL icin kurumsal kurulum akisini ve subscription gereksinimini ozetler.

## Kurulum Tercihi
- Minimal profil.
- Disk plani: LVM + ayri /var.
- Hostname ve timezone.

## Subscription
- Subscription Manager ile repo erisimi.
- Kurulum sonrasi repo dogrulama.

## Baslangic Sonrasi
- dnf update
- Ops kullanici + wheel
- SSH hardening

## Kontrol
- `cat /etc/redhat-release`
- `subscription-manager status`
