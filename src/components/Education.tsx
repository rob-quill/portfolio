import { certifications, education } from "../data/content";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Education</p>
            <h2>Foundations, then receipts.</h2>
          </div>
          <p>Computer science at Warwick — BSc then MSc — before the industry years.</p>
        </div>
        <div className="edu-grid">
          {education.map((item) => (
            <article className="card" key={item.title}>
              <p className="dates">{item.dates}</p>
              <h3>{item.title}</h3>
              <p className="org">{item.org}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        {certifications.length > 0 ? (
          <div className="certs">
            {certifications.map((cert) => (
              <div className="cert" key={cert.name}>
                <div>
                  <strong>{cert.name}</strong>
                  <div className="dates">{cert.org}</div>
                </div>
                <span>{cert.year}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
