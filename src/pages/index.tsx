import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Production-ready server setup docs for Ubuntu, CentOS, RHEL, Rocky/Alma.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={clsx('container', styles.heroGrid)}>
            <div className={styles.heroContent}>
              <span className={styles.heroTag}>Production Ready</span>
              <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
              <p className={styles.heroLead}>
                Uretime hazir sunucu kurulumlari icin tek ve net dokuman seti.
                Ubuntu, CentOS, RHEL ve Rocky/Alma odakli guvenlik + operasyon akisi.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary" to="/docs/">
                  Dokumana Git
                </Link>
                <Link className="button button--outline button--primary" to="/docs/quiz/quiz-overview">
                  Quizler
                </Link>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <h2>Ne Bulacaksin</h2>
              <ul>
                <li>Dagitim bazli kurulum adimlari</li>
                <li>SSH, firewall ve hardening rehberleri</li>
                <li>Operasyonel checklist ve troubleshooting</li>
                <li>Hazir komutlar ve faydali linkler</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.cardGrid}>
              <Link className={styles.card} to="/docs/technical/overview">
                <h3>Teknik Bilgi</h3>
                <p>Guvenlik, operasyon ve distro odakli teknik akislara gir.</p>
              </Link>
              <Link className={styles.card} to="/docs/commands/overview">
                <h3>Komutlar</h3>
                <p>Uretimde kullanilacak hazir komutlar ve ornekler.</p>
              </Link>
              <Link className={styles.card} to="/docs/resources/overview">
                <h3>Faydali Linkler</h3>
                <p>Resmi dokumanlar, guvenlik rehberleri, araclar.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
