---
title: CentOS Kurulum
sidebar_position: 1
---

CentOS icin uretim odakli kurulum ve ilk ayarlari verir.

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
- `cat /etc/centos-release`
- `ip a`, `ip r`
- `systemctl status sshd`
