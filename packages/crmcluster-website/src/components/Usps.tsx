import styles from './Usps.module.css';

const USPS = [
  {
    title: 'Private European cloud',
    body: 'Your data stays in the EU. We host on dedicated, GDPR-aligned infrastructure — not on shared US tenants.',
    icon: 'EU',
  },
  {
    title: 'Custom solutions, end to end',
    body: 'We design, build, and operate full CRM solutions on top of Twenty — tuned to your data model, workflows, and integrations.',
    icon: 'BUILD',
  },
  {
    title: 'AI-native by default',
    body: 'Backed by Demandcluster, we embed pragmatic AI — assistants, enrichment, automation — into your daily CRM workflow.',
    icon: 'AI',
  },
  {
    title: 'Powered by Twenty',
    body: 'Open-source foundation. No vendor lock-in. Every customisation is yours, on the modern Twenty CRM platform.',
    icon: '20',
  },
];

export const Usps = () => (
  <section id="solutions" className={styles.section}>
    <div className="container">
      <div className={styles.head}>
        <span className="eyebrow">What we do</span>
        <h2>One CRM platform. Built around your business.</h2>
        <p className={styles.lede}>
          We don&apos;t resell a generic SaaS. CRM Cluster ships a private,
          fully-managed CRM tailored to your sales motion — with AI built in and
          your data safely in Europe.
        </p>
      </div>
      <div className={styles.grid}>
        {USPS.map((usp) => (
          <article key={usp.title} className={styles.card}>
            <span className={styles.icon}>{usp.icon}</span>
            <h3>{usp.title}</h3>
            <p>{usp.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
