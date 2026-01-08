---
title: CentOS Operasyon ve Bakim
sidebar_position: 3
---

CentOS uretim sistemlerinde patch, log ve sistem bakim akisini verir.

## Patch Akisi
```sh
sudo dnf -y update
```

## Log Kontrol
```sh
journalctl -p warning -b
```

## Disk ve Kernel
```sh
df -h
rpm -q kernel
```

## Rutin Checklist
- [ ] Patch penceresi
- [ ] Log rotasyonu
- [ ] Disk izleme
