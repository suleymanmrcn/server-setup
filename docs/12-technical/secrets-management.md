---
title: Secrets Yonetimi
sidebar_position: 16
---

Sifre ve token gibi gizli verilerin guvenli saklanmasi ve dagitimi.

## Temel Kurallar
- Hardcoded secret yok.
- Repo icinde secret dosyasi yok.
- En az yetki + kisa sureli token.

## Vault Kullanimi (Ozet)
- Policy ile erisim sinirla.
- Token yenileme ve rotation planla.
- Audit loglari acik olsun.

## Oracle Secret Services
- Cloud native secret manager kullan.
- IAM policy ile erisim sinirla.

## Ornek Akis
1. Secret manager'da deger sakla.
2. Uygulama runtime'da cek.
3. Rotation ve audit loglari kontrol et.
