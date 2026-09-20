import { useState } from "react";
import { projectFilters, projects } from "../data/content";

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(active));

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Projects</p>
            <h2>Case studies with a number attached.</h2>
          </div>
          <p>Architecture, delivery, cost, and reliability — the work recruiters actually ask about.</p>
        </div>
        <div className="project-toolbar" role="tablist" aria-label="Filter projects">
          {projectFilters.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`filter${active === tag ? " active" : ""}`}
              onClick={() => setActive(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="projects">
          {visible.map((project) => (
            <article className="project" key={project.id}>
              <div className="impact">{project.impact}</div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
