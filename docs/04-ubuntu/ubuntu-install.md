---
title: Ubuntu Kurulum
sidebar_position: 1
---

Ubuntu uzerinde production-ready kurulum akisini ozetler.

## Kurulum Tercihi
- Minimal kurulum.
- Disk planina uygun LVM.
- Hostname ve timezone ayari.

## Ag
- Netplan ile statik IP
- DNS ve NTP dogrulama

## Baslangic Sonrasi
- apt update/upgrade
- Ops kullanici + sudo
- SSH hardening

## Kontrol
- `lsb_release -a`
- `ip a`, `ip r`
- `systemctl status sshd`
