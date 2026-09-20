import { useState } from "react";
import { experience } from "../data/content";

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Experience</p>
            <h2>Production ownership, not ticket-taking.</h2>
          </div>
          <p>IBM, Aldermore Bank, System C Healthcare, Anchorstacktech — always with a pager and a changelog.</p>
        </div>
        <div className="timeline">
          {experience.map((job) => {
            const open = openId === job.id;
            return (
              <article className="job" key={job.id}>
                <button
                  className="job-head"
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? "" : job.id)}
                >
                  <div>
                    <div className="job-role">{job.role}</div>
                    <div className="job-company">
                      {job.company} · {job.type}
                    </div>
                  </div>
                  <div className="job-meta">
                    {job.dates}
                    <br />
                    {job.location}
                    <span className="chevron" aria-hidden="true">
                      {open ? "–" : "+"}
                    </span>
                  </div>
                </button>
                {open ? (
                  <div className="job-body">
                    <p>{job.summary}</p>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="tags">
                      {job.stack.map((item) => (
                        <span className="tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
