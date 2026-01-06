---
title: Uretim Sunucu Kurulum Rehberi
sidebar_position: 1
slug: /
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

## Kapsam
- Bu bolum temel kararlar, varsayimlar ve minimum guvenlik beklentilerini kapsar.

## Icerik Plani
- Hedef kitle ve kullanim senaryolari
- Kapsam: Ubuntu, CentOS, RHEL, Rocky/Alma
- Guvenlik, operasyon ve uretim hazirligi

---

:::note Guvenlik Notu
Default ayarlar guvenli kabul edilmez. Uretime cikmadan once SSH, firewall ve erisim politikalarini sertlestir.
:::

:::tip Operasyon Notu
Patch pencereleri, geri alma ve izleme olmadan uretim hazirligi tamamlanmis sayilmaz.
:::

## Uygulama Adimlari
1. Gereksinimleri dogrula ve onayla.
2. Varsayilanlari guvenli hale getir.
3. Degisiklikleri kaydet ve izlenebilirlik sagla.

## Dogrulama
- Temel servislerin calistigini kontrol et.
- Guvenlik ayarlarinin aktif oldugunu test et.

## Notlar
- Bu bolum bir iskelet olarak tasarlanmistir; ortam ve politika gereksinimlerine gore genisletilmelidir.
