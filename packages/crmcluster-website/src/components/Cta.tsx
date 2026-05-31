import styles from './Cta.module.css';

export const Cta = () => (
  <section id="contact" className={styles.section}>
    <div className={`container ${styles.card}`}>
      <div className={styles.copy}>
        <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.14)', color: '#ffffff' }}>
          Let&apos;s build
        </span>
        <h2 className={styles.heading}>
          Ready for a CRM that fits your business?
        </h2>
        <p className={styles.lede}>
          Tell us about your sales process. We&apos;ll scope a custom Twenty-based
          CRM hosted in Europe, with the AI layer you actually need.
        </p>
      </div>
      <div className={styles.actions}>
        <a href="mailto:hello@crmcluster.com" className={styles.btnLight}>
          hello@crmcluster.com
        </a>
        <a href="tel:+31203695905" className={styles.btnGhost}>
          +31 (0)20 369 5905
        </a>
      </div>
    </div>
  </section>
);
