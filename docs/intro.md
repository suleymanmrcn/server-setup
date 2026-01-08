---
title: Uretim Sunucu Kurulum Rehberi
sidebar_position: 1
---

<div class="doc-hero">
  <div>
    <p class="doc-hero__eyebrow">Production Ready</p>
    <h1 class="doc-hero__title">Uretim Sunucu Kurulum Rehberi</h1>
    <p class="doc-hero__lead">
      Ubuntu, CentOS, RHEL ve Rocky/Alma icin production-grade kurulum ve guvenlik iskeleti.
    </p>
    <div class="doc-hero__actions">
      <a class="button button--primary" href="foundations/scope">Hizli Basla</a>
      <a class="button button--outline button--primary" href="quiz/quiz-overview">Quizlere Git</a>
    </div>
  </div>
  <div class="doc-hero__panel">
    <div class="doc-hero__panel-title">Hizli Linkler</div>
    <div class="doc-card-grid">
      <a class="doc-card" href="ubuntu/ubuntu-install">
        <span>Ubuntu Kurulum</span>
        <strong>Minimal + network + baseline</strong>
      </a>
      <a class="doc-card" href="centos/centos-install">
        <span>CentOS Kurulum</span>
        <strong>Stream + profil + servisler</strong>
      </a>
      <a class="doc-card" href="rhel/rhel-install">
        <span>RHEL Kurulum</span>
        <strong>Subscription + Kickstart</strong>
      </a>
      <a class="doc-card" href="rocky-alma/rocky-alma-install">
        <span>Rocky/Alma Kurulum</span>
        <strong>RHEL uyumlu dagitim</strong>
      </a>
    </div>
  </div>
</div>

## Hizli Baslangic
1. `foundations/scope` ile hedef ve kapsamdan basla.
2. `installation-common/install-planning` ile kurulum stratejini sec.
3. `security/ssh-hardening` ve `security/firewall-policy` ile guvenlik katmanini uygula.
4. `operations/updates-patching` ve `operations/monitoring-logging` ile operasyonu netlestir.

## Dokuman Haritasi
- Temeller: kapsam, on kosullar, destek matrisi
- Mimari: ag, depolama ve referans topoloji
- Kurulum: planlama, LVM, baseline
- Dagitimlar: Ubuntu, CentOS, RHEL, Rocky/Alma
- Guvenlik: SSH, firewall, SELinux/AppArmor, fail2ban, auditd
- Operasyon: patch, log, yedekleme, monitoring
- Teknik Bilgi: container, dependency, secrets, cloud ag

## Bu Rehber Ne Degil?
- Uygulama deployment kilavuzu degil.
- Cloud provider'a ozel detayli kurulum degil.
- Her kuruma ozel policy belgesi degil.

---

:::note Guvenlik Notu
Default ayarlar guvenli kabul edilmez. Uretime cikmadan once SSH, firewall ve erisim politikalarini sertlestir.
:::

:::tip Operasyon Notu
Patch pencereleri, geri alma ve izleme olmadan uretim hazirligi tamamlanmis sayilmaz.
:::

## Uretim Oncelikleri
- Erisim: anahtar tabanli SSH, root kapali
- Ag: default deny, sadece gerekli portlar
- Log: merkezi toplama ve rotasyon
- Patch: planli guncelleme penceresi
- Yedek: geri donus testi
