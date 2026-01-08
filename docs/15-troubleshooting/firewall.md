---
title: Firewall Sorunlari
sidebar_position: 4
---

## Belirti
- Port acik gorunmuyor
- Disaridan servis erisilemiyor

## Hizli Kontrol
```sh
ss -lntp
ufw status
# veya
firewall-cmd --list-all
```

## Olasi Sebepler
- Kurallar kalici degil
- Yanlis zone
- SG veya NACL blokluyor

## Cozum Akisi
1. Lokal portu dogrula (ss)
2. Firewall kuralini kontrol et
3. Cloud SG/NACL kontrol et
