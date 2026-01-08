---
title: Kapsam ve Hedefler
sidebar_position: 1
---

Bu rehberin neyi hedefledigi, neyi kapsamadigi ve uretim standardini tanimlar.

## Hedef Kitle
- Sistem yoneticileri
- DevOps/SRE ekipleri
- Uretimde Linux sunucu yoneten teknik ekipler

## Uretim Tanimi (Minimum)
- Erişim: anahtar tabanli SSH, root login kapali
- Ag: default deny firewall, sadece gerekli portlar acik
- Izleme: metrik + log toplama aktif
- Yedek: geri donus testi yapilmis
- Patch: planli guncelleme penceresi var

## Kapsam
- Ubuntu, CentOS, RHEL, Rocky/Alma
- Kurulum, guvenlik, operasyon
- Cloud ag temelleri ve secrets pratikleri

## Kapsam Disi
- Uygulama deployment rehberleri
- Cloud provider ozel detayli kurulumlar
- Kurum ici SLA/policy belgeleri

## Ornek Senaryolar
- Yeni uretim sunucusu ayagi kaldirma
- Mevcut sunucuyu guvenlik baseline'a cekme
- Ops ekibi icin runbook cikarma

## Basari Kriterleri
- En az 1 distro icin kurulum + hardening tamam
- Firewall ve SSH politikasi dokumante
- Monitoring ve backup test edilmis
