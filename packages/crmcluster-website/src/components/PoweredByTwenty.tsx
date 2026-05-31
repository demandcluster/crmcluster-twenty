import styles from './PoweredByTwenty.module.css';

export const PoweredByTwenty = () => (
  <section id="twenty" className={styles.section}>
    <div className={`container ${styles.inner}`}>
      <span className="eyebrow">Open source foundation</span>
      <h2>Powered by Twenty.</h2>
      <p className={styles.body}>
        Twenty is the modern open-source CRM. We build on top of it because it&apos;s
        clean, extensible, and free of vendor lock-in. CRM Cluster takes Twenty
        from open-source project to production platform — hosted in the EU,
        customised to your business, and shipped with AI on top.
      </p>
      <div className={styles.row}>
        <a
          href="https://twenty.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          Learn about Twenty
        </a>
        <a
          href="https://github.com/twentyhq/twenty"
          target="_blank"
          rel="noreferrer"
          className={styles.subtle}
        >
          Twenty on GitHub →
        </a>
      </div>
    </div>
  </section>
);
