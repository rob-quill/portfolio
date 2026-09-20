import { FormEvent, useState } from "react";
import { profile } from "../data/content";

type Status = { type: "ok" | "err"; message: string } | null;

export default function Contact() {
  const [status, setStatus] = useState<Status>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ type: "err", message: "Name, email, and a short note are required." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "err", message: "That email does not look quite right." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${company ? ` · ${company}` : ""}\n${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "ok",
      message: "Opening your mail client. If nothing appears, email me directly.",
    });
    event.currentTarget.reset();
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Contact</p>
            <h2>If the platform is loud, expensive, or stuck — talk to me.</h2>
          </div>
          <p>Open to senior DevOps and platform roles. Remote-first from Porthcawl, UK / EU.</p>
        </div>
        <div className="contact-grid">
          <div>
            <p className="lede">
              I read every note. The most useful emails include the stack, the constraint, and whether you need a
              contractor or a permanent hire.
            </p>
            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>
                Email <small>{profile.email}</small>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <small>{profile.githubHandle}</small>
              </a>
              <span>
                Location <small>{profile.location}</small>
              </span>
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <label>
                Name
                <input name="name" autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
              </label>
            </div>
            <label>
              Company <span style={{ color: "var(--faint)" }}>(optional)</span>
              <input name="company" autoComplete="organization" placeholder="Team or company" />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="What needs to be quieter, cheaper, or faster?" />
            </label>
            {status ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
