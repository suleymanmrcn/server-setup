---
title: Ubuntu Operasyon ve Bakim
sidebar_position: 3
---

Ubuntu uretim sistemlerinde rutin bakim ve operasyon adimlarini netlestirir.

## Patch Akisi
```sh
sudo apt update
sudo apt -y upgrade
```

## Log Kontrol
```sh
journalctl -p warning -b
journalctl -u sshd -f
```

## Disk ve Performans
```sh
df -h
free -h
```

## Rutin Checklist
- [ ] Haftalik patch
- [ ] Log rotasyonu
- [ ] Disk doluluk kontrolu
- [ ] Backup testi
