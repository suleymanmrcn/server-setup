---
title: Dagitimlar Genel Bakis
sidebar_position: 3
---

Ubuntu, CentOS, RHEL, Rocky ve Alma arasindaki temel farklari verir.

## Kisa Karsilastirma
| Dagitim | Paket | Firewall | Policy | Not |
| --- | --- | --- | --- | --- |
| Ubuntu | apt | ufw | AppArmor | LTS odakli |
| CentOS | dnf/yum | firewalld | SELinux | Stream yapisi |
| RHEL | dnf/yum | firewalld | SELinux | Kurumsal destek |
| Rocky/Alma | dnf/yum | firewalld | SELinux | RHEL uyumlu |

## Secim Kriteri
- Kurumsal destek gerekiyorsa RHEL
- LTS ve yaygin ekosistem istenirse Ubuntu
- RHEL uyumlu acik kaynak istenirse Rocky/Alma

## Not
EOL surum uretimde kullanilmaz.
