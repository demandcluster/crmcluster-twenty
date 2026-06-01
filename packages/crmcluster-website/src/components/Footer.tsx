import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.grid}`}>
      <div className={styles.brand}>
        <a href="/" className={styles.brandRow}>
          <span className={styles.dot} aria-hidden />
          CRM Cluster
        </a>
        <p className={styles.tagline}>
          Custom AI-native CRM, hosted in the EU. A Demand Cluster company.
        </p>
        <p className={styles.address}>
          Diemermere 1, 1112 TA Diemen, Netherlands
          <br />
          +31 (0)20 369 5905
        </p>
      </div>
      <div className={styles.cols}>
        <div>
          <h4>Product</h4>
          <a href="https://app.crmcluster.com">Open app</a>
          <a href="#solutions">Solutions</a>
          <a href="#why">Why CRM Cluster</a>
        </div>
        <div>
          <h4>Foundation</h4>
          <a href="https://twenty.com" target="_blank" rel="noreferrer">
            Powered by Twenty
          </a>
          <a
            href="https://github.com/twentyhq/twenty"
            target="_blank"
            rel="noreferrer"
          >
            Twenty on GitHub
          </a>
        </div>
        <div>
          <h4>Company</h4>
          <a
            href="https://www.demandcluster.com"
            target="_blank"
            rel="noreferrer"
          >
            Demandcluster
          </a>
          <a href="mailto:hello@crmcluster.com">Contact</a>
        </div>
      </div>
    </div>
    <div className={`container ${styles.bottom}`}>
      <span>
        © {new Date().getFullYear()} CRM Cluster. All rights reserved.
      </span>
      <span>Powered by Twenty · Hosted in the EU</span>
    </div>
  </footer>
);
