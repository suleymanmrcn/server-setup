---
title: Firewall Commands
sidebar_position: 3
---

## UFW (Ubuntu)
- ufw allow 22/tcp
- ufw enable

## firewalld (RHEL/CentOS/Rocky)
- firewall-cmd --add-service=ssh --permanent
- firewall-cmd --reload
