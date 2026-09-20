import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Skills</p>
            <h2>The stack I actually run in production.</h2>
          </div>
          <p>Not a shopping list — tools I have owned on-call, costed, and handed to other teams.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="card skill-card" key={group.id}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
