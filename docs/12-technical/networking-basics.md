---
title: Ag ve IP Temelleri
sidebar_position: 5
---

Bu sayfa, IP, gateway, DNS ve arayuz ayarlari icin pratik bir temel verir.

## Hizli Harita
- IP ve route: `ip a`, `ip r`
- Portlar: `ss -lntp`
- DNS: `resolv.conf`, `systemd-resolve --status`

## Distro Farklari (Kisa)
| Konu | Ubuntu | RHEL/CentOS/Rocky/Alma |
| --- | --- | --- |
| Arayuz yonetimi | Netplan | NetworkManager (nmcli) |
| Dosya konumu | /etc/netplan/ | /etc/NetworkManager/system-connections/ |
| Apply | netplan apply | nmcli con reload |

## Minimal Konfig Kontrolu
- IP/route dogru mu?
- Default gateway var mi?
- DNS iceride mi, disarida mi?
- Zaman senkronu acik mi? (NTP)

## Uygulama Akisi
1. Mevcut durum: `ip a`, `ip r`, `resolv.conf`
2. Degisikligi uygula (Netplan veya nmcli)
3. DNS testi: `dig`, `nslookup`
4. Servis portu dogrula: `ss -lntp`

## Ornek Komutlar
```sh
# IP ve route
ip a
ip r

# DNS
cat /etc/resolv.conf
systemd-resolve --status

# Portlar
ss -lntp
```

## Sik Hatalar
- DNS kaydi yoksa servis calisir ama erisilemez.
- Yanlis subnet, routing ve firewall sorunlarini maskeleyebilir.
- Netplan degisikligi apply edilmezse config aktif olmaz.
