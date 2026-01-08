---
title: Paket Yonetimi Temelleri
sidebar_position: 4
---

Guvenli paket guncelleme, repo hijyeni ve rollback dusuncesini anlatir.

## Ubuntu (apt)
```sh
sudo apt update
sudo apt -y upgrade
sudo apt autoremove
```

## RHEL Tabanli (dnf/yum)
```sh
sudo dnf -y update
sudo dnf autoremove
```

## Repo Hijyeni
- Sadece resmi veya kurumsal repo.
- EOL repo kullanma.
- Guncelleme penceresi belirle.

## Rollback Notu
- Snapshot veya backup yoksa risk artar.
