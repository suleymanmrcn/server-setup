---
title: RHEL Operasyon ve Bakim
sidebar_position: 3
---

RHEL uretim sistemlerinde patch, log ve kurumsal operasyon akisini verir.

## Patch Akisi
```sh
sudo dnf -y update
subscription-manager status
```

## Log ve Audit
```sh
journalctl -p warning -b
ausearch -m AVC -ts recent
```

## Kernel Bakim
```sh
rpm -q kernel
```

## Rutin Checklist
- [ ] Patch penceresi
- [ ] RHSM kontrolu
- [ ] Audit log kontrolu
