import styles from './Hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={`container ${styles.inner}`}>
      <span className="eyebrow">EU-hosted · AI-native CRM</span>
      <h1>
        The CRM your team actually wants —
        <span className={styles.accent}> built for your business</span>.
      </h1>
      <p className={styles.lede}>
        CRM Cluster delivers fully custom CRM solutions powered by Twenty, hosted in
        a private European cloud. Built by Demand Cluster in the Netherlands,
        with deep AI expertise baked into every workflow.
      </p>
      <div className={styles.ctas}>
        <a href="#contact" className="btn btn-primary">
          Talk to our team
        </a>
        <a href="https://app.crmcluster.com" className="btn btn-secondary">
          Open the app
        </a>
      </div>
      <div className={styles.proof}>
        <span className={styles.proofDot} aria-hidden />
        Live at <strong>app.crmcluster.com</strong> · Powered by Twenty
      </div>
    </div>
    <div className={styles.bg} aria-hidden />
  </section>
);
