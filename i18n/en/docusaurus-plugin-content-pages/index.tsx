import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from '@site/src/pages/index.module.css';

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
                A single, production-ready documentation set for Linux server setup.
                Security and operations flows for Ubuntu, CentOS, RHEL, and Rocky/Alma.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary" to="/docs/intro">
                  Open Docs
                </Link>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <h2>What You Get</h2>
              <ul>
                <li>Distro-specific setup steps</li>
                <li>SSH, firewall, and hardening guides</li>
                <li>Ops checklist and troubleshooting</li>
                <li>Ready-to-run commands and resources</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.cardGrid}>
              <Link className={styles.card} to="/docs/technical/overview">
                <h3>Technical Guide</h3>
                <p>Security, operations, and distro-focused flows.</p>
              </Link>
              <Link className={styles.card} to="/docs/commands/overview">
                <h3>Commands</h3>
                <p>Production-safe command patterns and examples.</p>
              </Link>
              <Link className={styles.card} to="/docs/resources/overview">
                <h3>Resources</h3>
                <p>Official docs, security references, and tools.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
