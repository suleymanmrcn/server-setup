---
title: SELinux / AppArmor Politikasi
sidebar_position: 3
---

MAC (zorunlu erisim kontrolu) katmanini uretime uygun hale getirir.

## SELinux (RHEL tabanli)
- Mode: Enforcing (uretim), Permissive (test)
- Kontrol: `getenforce`, `sestatus`

## AppArmor (Ubuntu)
- Profil bazli kisitlama
- Kontrol: `aa-status`

## Uygulama Notlari
- Policy degisiklikleri log ile izlenmeli.
- Servis bozarsa permissive ile tespit, sonra policy guncelle.

## Sik Hatalar
- SELinux tamamen kapatmak
- Profil degisikligini dokumante etmemek
