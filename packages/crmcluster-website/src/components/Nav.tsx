import styles from './Nav.module.css';

const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why CRM Cluster', href: '#why' },
  { label: 'Powered by Twenty', href: '#twenty' },
  { label: 'Contact', href: '#contact' },
];

export const Nav = () => (
  <header className={styles.nav}>
    <div className={`container ${styles.row}`}>
      <a href="/" className={styles.brand}>
        <span className={styles.dot} aria-hidden />
        CRM Cluster
      </a>
      <nav className={styles.links} aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="https://app.crmcluster.com" className="btn btn-primary">
        Open app
      </a>
    </div>
  </header>
);
