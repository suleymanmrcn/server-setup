---
title: Faydali Paketler
sidebar_position: 7
---

## Amac
Uretimde tani ve guvenlik icin sik kullanilan paketleri amaclarina gore gruplar.

## Guvenlik
- fail2ban: brute-force engelleme
- auditd: audit loglari ve kural seti
- openscap: policy tarama ve rapor

## Sistem ve Disk
- htop: gelismis process izlemesi
- ncdu: disk kullanim analizi
- lsof: acik dosyalar ve portlar
- iotop: IO yogunluk analizi

## Ag ve Trafik
- iftop: anlik trafik izleme
- nload: arayuz bazli bandwidth
- tcpdump: paket analizi
- traceroute/mtr: yol ve gecikme analizi

## Log ve Analiz
- rsyslog: log toplama ve forward
- logrotate: log rotasyonu
- journalctl: sistem log gorunumu

## Ne Zaman Kullanilir?
- Performans sorunu: htop, iotop
- Disk doluyor: ncdu, du
- Trafik sorunu: iftop, nload, tcpdump
- Guvenlik olayi: fail2ban, auditd

## Kurulum Ornekleri
```sh
# Ubuntu
sudo apt install -y htop ncdu lsof iftop nload tcpdump fail2ban auditd

# RHEL tabanli
sudo dnf install -y htop ncdu lsof iftop nload tcpdump fail2ban audit
```
