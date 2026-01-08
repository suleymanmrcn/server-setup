---
title: Linux Hardening Genel Bakis
sidebar_position: 1
---

Uretim icin temel sertlestirme katmanlarini ve uygulama sirasini verir.

## Katmanlar (Zorunlu)
1. Erisim: SSH anahtar, root kapali
2. Ag: default deny firewall
3. MAC: SELinux/AppArmor policy
4. Izleme: auditd + log toplama

## Minimum Checklist
- [ ] Root login kapali
- [ ] Password auth kapali
- [ ] Firewall default deny
- [ ] Sadece gerekli portlar acik
- [ ] SELinux/AppArmor aktif
- [ ] Fail2ban aktif
- [ ] Audit loglari acik

## Uygulama Sirasi
1. SSH ve firewall
2. SELinux/AppArmor policy
3. Fail2ban
4. Auditd + log merkezi toplama

## Sik Hatalar
- SELinux'u kapatmak
- Firewall kuralini kalici yapmamak
- SSH degisikligi sonrasi port test etmemek
