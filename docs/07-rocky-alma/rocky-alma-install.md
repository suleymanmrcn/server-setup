---
title: Rocky/Alma Kurulum
sidebar_position: 1
---

RHEL uyumlu dagitimlarda uretim kurulum akisini verir.

## Kurulum Tercihi
- Minimal profil.
- Disk plani: LVM + ayri /var.
- Hostname ve timezone.

## Ag
- NetworkManager (nmcli)
- DNS ve NTP dogrulama

## Baslangic Sonrasi
- dnf update
- Ops kullanici + wheel
- SSH hardening

## Kontrol
- `cat /etc/os-release`
- `ip a`, `ip r`
