<INSTRUCTIONS>
Phased doc build plan for this repo, with current progress and upcoming topics.

Phase 1: Taxonomy and Scope
- Confirm top-level sections and keep counts bounded.
- Identify distro list and core hardening/ops topics.
- Capture naming and path conventions for new docs.

Phase 2: Content Drafting (TR first)
- Create TR pages under docs/ with frontmatter and clear outlines. (done)
- Add distro-general guidance (packages, networking, logs). (done)
- Add hardening topics (overview, fail2ban, auditd). (done)
- Add useful packages/tools page with brief purpose. (done)

Phase 3: Review and Expansion
- Spot gaps and redundancy; consolidate if needed.
- Add EN translations for finalized TR pages.
- Add quizzes after core content stabilizes.

Current Progress (TR)
- Added technical overview pages: distros, package mgmt, networking, logging, useful packages.
- Added hardening overview + fail2ban + auditd.
- Base structure already includes distros and ops sections from earlier skeleton.

Next Content Topics (TR)
- Hardening: SSH policy, firewall policy, SELinux/AppArmor profiles, sudo policy.
- Ops: patch windows, reboot strategy, backup/restore, monitoring basics, log shipping.
- Distro specifics: repo hygiene, kernel lifecycle, NIC config examples.
- Useful packages: fail2ban, auditd, htop, ncdu, iftop, nload, tcpdump, rsyslog.
- Cloud/Network: VPC, subnet, security groups, jump host/bastion access.
- Containers: Docker hardening, rootless, image update policy, base image strategy.
- Secrets: no hardcoded secrets, Vault usage, Oracle secret services.
- Dependency management: runtime/library pinning and update cadence.
- Monitoring & DDoS: baseline metrics, alerting, traffic anomalies, rate limiting.

Suggested Additions (Server-side)
- Time sync (chrony/systemd-timesyncd) and NTP policy.
- User and access policy (least privilege, sudoers hygiene).
- File integrity monitoring (AIDE or similar).
- Baseline security checks (CIS-inspired checklist summary).
- SSH break-glass access and recovery steps.
</INSTRUCTIONS>
