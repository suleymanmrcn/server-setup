---
title: SSH Commands
sidebar_position: 2
---

## Key-based Access
- ssh-keygen -t ed25519
- ssh-copy-id user@server

## Port Change
- Update Port in /etc/ssh/sshd_config
- systemctl reload sshd
