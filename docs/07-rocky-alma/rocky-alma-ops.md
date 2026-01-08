---
title: Rocky/Alma Operasyon ve Bakim
sidebar_position: 3
---

RHEL uyumlu dagitimlarda rutin patch ve log bakimini verir.

## Patch Akisi
```sh
sudo dnf -y update
```

## Log Kontrol
```sh
journalctl -p warning -b
```

## Kernel Bakim
```sh
rpm -q kernel
```

## Rutin Checklist
- [ ] Patch penceresi
- [ ] Disk izleme
- [ ] Log rotasyonu
