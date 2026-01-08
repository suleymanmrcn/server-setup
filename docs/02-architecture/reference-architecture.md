---
title: Referans Mimari
sidebar_position: 1
---

Tek sunucudan cok katmanli yapilara geciste kullanilacak referans mimariyi tanimlar.

## Mimari Secenekler
Asagidaki secenekler olcek ve risk seviyesine gore kullanilir.

### 1) Tek Sunucu
- Web/App + DB ayni makinada
- Kucuk trafik, dusuk operasyon
- Risk: tek noktadan hata

### 2) Iki Katman
- App ve DB ayrik
- Basit olceklenebilirlik
- Risk: LB yoksa app tek nokta olabilir

### 3) Cok Katman
- Load balancer + app katmani + DB
- Monitoring ve log node ayrik
- Uygun degilse maliyet artar

## Referans Akis (Uretim)
- Public subnet: LB veya bastion
- Private subnet: app ve DB
- SG: servis bazli erisim

## Karar Kriterleri
| Kriter | Tek Sunucu | Iki Katman | Cok Katman |
| --- | --- | --- | --- |
| Maliyet | Dusuk | Orta | Yuksek |
| Uptime | Dusuk | Orta | Yuksek |
| Operasyon | Basit | Orta | Zor |
| Olcek | Sinirli | Orta | Yuksek |

## Riskler ve Notlar
- Tek sunucuda yedek ve rollback kritik hale gelir.
- LB yoksa trafik artisi servis keser.
- DB her zaman private subnet olmalidir.

## Hangi Durumda Ne?
- MVP: tek sunucu, ama guvenlik baseline zorunlu.
- Orta trafik: iki katman.
- Uretim kritik: cok katman + izleme + HA.
