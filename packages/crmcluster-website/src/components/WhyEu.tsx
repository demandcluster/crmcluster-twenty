import styles from './WhyEu.module.css';

const POINTS = [
  {
    h: 'Data stays in the EU',
    p: 'Hosted in a private European cloud, under EU law. No transatlantic data shuffle, no surprise sub-processors.',
  },
  {
    h: 'You own the platform',
    p: 'Built on open-source Twenty. We harden, extend and operate it for you — but the foundation is open.',
  },
  {
    h: 'AI you can actually trust',
    p: 'Models run against your data with clear boundaries. We pick the right model for the job, not the loudest one.',
  },
  {
    h: 'Dutch engineering, EU SLA',
    p: 'Based in the Netherlands as part of Demand Cluster. Direct line to the team that builds and runs your CRM.',
  },
];

export const WhyEu = () => (
  <section id="why" className={styles.section}>
    <div className={`container ${styles.grid}`}>
      <div className={styles.intro}>
        <span className="eyebrow">Why CRM Cluster</span>
        <h2>European hosting, custom build, AI inside.</h2>
        <p>
          Big CRMs make you fit their world. We do the opposite: we wrap Twenty
          around your processes, host it in Europe, and add the AI layer you
          actually need.
        </p>
      </div>
      <ul className={styles.list}>
        {POINTS.map((point) => (
          <li key={point.h} className={styles.item}>
            <div className={styles.check} aria-hidden>
              ✓
            </div>
            <div>
              <h3>{point.h}</h3>
              <p>{point.p}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
