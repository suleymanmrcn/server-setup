---
title: Production Server Setup Guide
sidebar_position: 1
slug: /
---

<div class="doc-hero">
  <div>
    <p class="doc-hero__eyebrow">Production Ready</p>
    <h1 class="doc-hero__title">Production Server Setup Guide</h1>
    <p class="doc-hero__lead">
      Production-grade setup and security skeleton for Ubuntu, CentOS, RHEL, and Rocky/Alma.
    </p>
    <div class="doc-hero__actions">
      <a class="button button--primary" href="foundations/scope">Quick Start</a>
      <a class="button button--outline button--primary" href="quiz/quiz-overview">Open Quizzes</a>
    </div>
  </div>
  <div class="doc-hero__panel">
    <div class="doc-hero__panel-title">Quick Links</div>
    <div class="doc-card-grid">
      <a class="doc-card" href="ubuntu/ubuntu-install">
        <span>Ubuntu Install</span>
        <strong>Minimal + network + baseline</strong>
      </a>
      <a class="doc-card" href="centos/centos-install">
        <span>CentOS Install</span>
        <strong>Stream + profile + services</strong>
      </a>
      <a class="doc-card" href="rhel/rhel-install">
        <span>RHEL Install</span>
        <strong>Subscription + Kickstart</strong>
      </a>
      <a class="doc-card" href="rocky-alma/rocky-alma-install">
        <span>Rocky/Alma Install</span>
        <strong>RHEL-compatible distro</strong>
      </a>
    </div>
  </div>
</div>

## Scope
- Covers key decisions, assumptions, and minimum security expectations.

## Content Plan
- Target audience and use cases
- Scope: Ubuntu, CentOS, RHEL, Rocky/Alma
- Security, operations, and production readiness

---

:::note Security Note
Defaults are not secure. Harden SSH, firewall, and access policies before production.
:::

:::tip Operations Note
No maintenance windows, rollback plan, or monitoring means no production readiness.
:::

## Implementation Steps
1. Validate requirements and approvals.
2. Secure the defaults before exposing services.
3. Record changes for traceability.

## Validation
- Verify core services are running.
- Test that security settings are enforced.

## Notes
- This is a skeleton; expand based on environment and policy requirements.
