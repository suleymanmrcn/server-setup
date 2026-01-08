---
title: Hizli Kurulum (TR)
sidebar_position: 1
---

Production icin temel guvenlik ve operasyon baslangicini tek akista verir.

## Script'ler
- `scripts/quick-setup-ubuntu.sh`
- `scripts/quick-setup-rhel.sh`

Ornek:
```sh
USER=opsuser SSH_PORT=2222 ./scripts/quick-setup-ubuntu.sh
```

## Notlar
- SSH portunu degistirirsen firewall kuralini unutma.
- Script'ler `sshd -t` ile config test eder.
- Kernel update varsa reboot planla.
