---
title: Network Segmentation Best Practices
sidebar_position: 26
---

Ag segmentasyonu, riskleri azaltmak icin katmanlar arasi ayrim yapar.

## Ilkeler
- App ve DB subnet ayrimi
- Public subnet sadece LB/bastion
- Least privilege erisim

## Ornek Segmentasyon
- Public: LB, bastion
- Private: app
- Isolated: DB

## Not
Segmentasyon yoksa lateral movement riski artar.
