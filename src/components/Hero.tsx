import { metrics, profile } from "../data/content";
import Topology from "./Topology";

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <div className="hero-meta">
            <span className="status-pill">
              <i aria-hidden="true" />
              Available
            </span>
            <span className="chip">{profile.location}</span>
            <span className="chip">Remote / hybrid UK</span>
          </div>
          <p className="kicker">Senior DevOps · Platform · SRE</p>
          <h1>
            {profile.name.split(" ")[0]}{" "}
            <span>{profile.name.split(" ")[1]}</span>
          </h1>
          <p className="lede">{profile.headline}</p>
          <p className="lede" style={{ marginTop: 12 }}>
            {profile.subhead}
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">
              View selected work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="metrics" aria-label="Career metrics">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="panel" aria-label="Platform topology">
          <div className="panel-bar">
            <span>control-plane · eu-west-2</span>
            <span>all probes passing</span>
          </div>
          <Topology />
        </aside>
      </div>
    </section>
  );
}
