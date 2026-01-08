---
title: Ag Topolojisi ve IP Plani
sidebar_position: 2
---

IP planini, DNS ve subnet stratejisini operasyonel bakisla netlestirir.

## IP Plani Pratikleri
- Public ve private araliklar ayrilir.
- Gateway ve DNS kayitlari en basta belirlenir.
- Reverse DNS kritik servisler icin zorunludur.

## Topoloji Secimi
- Tek subnet: hizli kurulum, dusuk izolasyon.
- Cok subnet: daha guvenli, daha fazla yonetim.
- VLAN: kritik servisleri ayirir.

## Kontrol Listesi
- [ ] IP araligi belirlendi
- [ ] Gateway ve DNS net
- [ ] Public/private ayrimi var
- [ ] NTP kaynagi tanimli

## Ornek
- Public subnet: LB ve bastion
- Private subnet: app ve DB
