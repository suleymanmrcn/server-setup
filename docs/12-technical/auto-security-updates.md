---
title: Otomatik Guvenlik Guncellemeleri
sidebar_position: 33
---

Kritik guvenlik guncellemelerini otomatik almak icin kontrollu yaklasim.

## Ubuntu (unattended-upgrades)
```sh
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

## RHEL Tabanli (dnf-automatic)
```sh
sudo dnf -y install dnf-automatic
sudo systemctl enable --now dnf-automatic.timer
```

## Risk ve Kontrol
- Otomatik guncelleme oncesi snapshot/backup
- Kernel update varsa planli reboot
- Update raporlarini sakla
