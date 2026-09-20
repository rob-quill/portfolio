import { about } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">About me</p>
            <h2>Platforms that stay out of the way.</h2>
          </div>
          <p>Porthcawl-based. 17+ years on the tools. Still happiest in a pull request, not a status meeting.</p>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>{about.lead}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="principles">
            {about.principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
