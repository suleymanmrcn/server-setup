---
title: Firewall Politikasi ve Uygulama
sidebar_position: 2
---

Default deny politikasiyla port acma kurallarini netlestirir.

## Politika
- Inbound: default deny
- Outbound: kontrollu allow
- Servis bazli acilis

## UFW (Ubuntu)
```sh
sudo ufw default deny incoming
sudo ufw allow 2222/tcp
sudo ufw enable
```

## firewalld (RHEL tabanli)
```sh
sudo firewall-cmd --set-default-zone=public
sudo firewall-cmd --add-port=2222/tcp --permanent
sudo firewall-cmd --reload
```

## Dogrulama
```sh
ufw status
# veya
firewall-cmd --list-all
```

## Sik Hatalar
- Kurallari kalici yapmamak
- Tum portlari acmak
