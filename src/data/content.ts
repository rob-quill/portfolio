export const profile = {
  name: "Rob Quill",
  shortName: "RQ",
  role: "Senior DevOps Engineer",
  location: "Porthcawl, United Kingdom",
  availability: "Open to senior DevOps / platform roles",
  email: "andersonmatheos1031@gmail.com",
  github: "https://github.com/rob-quill",
  githubHandle: "rob-quill",
  headline: "I keep production quiet, cheap, and boring — so product teams can ship.",
  subhead:
    "17+ years in UK software and operations: banking at Aldermore, healthcare platforms at System C, and senior DevOps at Anchorstacktech. Terraform, GitOps, and observability that changes decisions — not just dashboards.",
};

export const metrics = [
  { value: "17+", label: "years in production" },
  { value: "7 yrs", label: "senior DevOps seat" },
  { value: "4", label: "companies shipped at" },
  { value: "Remote", label: "UK-based, worldwide teams" },
];

export const about = {
  lead: "I treat infrastructure as a product: versioned, reviewed, observable, and boring on a Saturday night.",
  paragraphs: [
    "I'm a Porthcawl-based senior DevOps engineer. I build the control plane that engineering teams stand on — landing zones, Kubernetes platforms, delivery pipelines, and the golden paths that stop every squad inventing their own YAML dialect.",
    "The work that matters to me is the unglamorous kind: cutting a cloud bill without starving capacity, taking a 3 a.m. pager and making sure it never rings for the same reason twice, and turning a two-week environment request into a fifteen-minute self-service flow.",
    "I started as a software developer at IBM and Aldermore Bank, moved into DevOps at System C Healthcare, and spent the last seven years as senior DevOps at Anchorstacktech. I write the runbook, not just the cluster.",
  ],
  principles: [
    {
      title: "Automate the path, not the exception",
      body: "Golden paths, reusable Terraform modules, and GitOps sync. Humans should approve intent — not click through consoles.",
    },
    {
      title: "Reliability is a product feature",
      body: "SLIs, error budgets, and alerts that name an owner. If a signal does not change a decision, it is noise.",
    },
    {
      title: "Cost is an architecture choice",
      body: "Rightsizing, Karpenter, Spot where it is safe, and dashboards that show pounds, not just CPU.",
    },
    {
      title: "Security is the default path",
      body: "OIDC, short-lived credentials, policy-as-code, and secrets that never live in a pipeline variable.",
    },
  ],
};

export const experience = [
  {
    id: "anchorstacktech",
    role: "Senior DevOps Engineer",
    company: "Anchorstacktech",
    type: "Technology",
    location: "Remote",
    dates: "Nov 2019 — Aug 2026",
    stack: ["AWS EKS", "Terraform", "Argo CD", "GitHub Actions", "Prometheus", "Vault"],
    summary:
      "Owned the cloud platform and delivery path for product teams: Kubernetes, GitOps, and the on-call that keeps releases boring.",
    bullets: [
      "Designed and ran AWS and Kubernetes platforms used by multiple product squads, with Terraform as the only supported way to change production.",
      "Introduced GitOps with Argo CD and Helm so production deploys were a merge, a sync, and an automatic rollback — not a war room.",
      "Built CI/CD in GitHub Actions with OIDC to AWS, ephemeral preview environments, and short-lived credentials. No long-lived keys in pipelines.",
      "Stood up Prometheus, Grafana, and structured alerting so pages named an owner and an SLO, not a red dashboard.",
      "Mentored engineers on incident response, runbooks, and infrastructure reviews; treated cost and security as part of the same pull request.",
    ],
  },
  {
    id: "system-c",
    role: "DevOps Engineer",
    company: "System C Healthcare",
    type: "Healthcare",
    location: "Remote",
    dates: "Apr 2014 — Oct 2019",
    stack: ["AWS", "Terraform", "Jenkins", "Docker", "Ansible", "ELK"],
    summary:
      "Took clinical and operational platforms from snowflake servers to versioned infrastructure, without gambling patient-facing uptime.",
    bullets: [
      "Codified environments in Terraform and configuration in Ansible so NHS-facing systems could be rebuilt, not remembered.",
      "Containerised services and introduced repeatable Jenkins promotions across test, staging, and production.",
      "Centralised logs and metrics so support and engineering shared one picture of a failing clinic workflow.",
      "Hardened release paths for regulated healthcare software: access control, change records, and environments that matched production.",
      "Reduced release coordination from a multi-hour handover to a documented, one-click promotion with a known rollback.",
    ],
  },
  {
    id: "aldermore",
    role: "Software Engineer",
    company: "Aldermore Bank",
    type: "Banking · Hybrid",
    location: "Hybrid, UK",
    dates: "Nov 2009 — Mar 2014",
    stack: ["Java", "SQL", "Linux", "CI", "Banking platforms"],
    summary:
      "Built and shipped banking software in a regulated environment — the years that taught me why release discipline is a product feature.",
    bullets: [
      "Delivered application features for specialist banking products, working with operations on change windows and production support.",
      "Improved build and test automation so releases were repeatable rather than heroics on a Friday night.",
      "Partnered with infrastructure teams on deployments, configuration, and the first steps toward environment parity.",
      "Learned regulated delivery: audit trails, least privilege, and the cost of an undocumented hotfix.",
    ],
  },
  {
    id: "ibm",
    role: "Software Developer Intern",
    company: "IBM",
    type: "Internship · On-site",
    location: "On-site, UK",
    dates: "Aug 2009 — Oct 2009",
    stack: ["Software development", "Enterprise systems"],
    summary:
      "First production seat: enterprise software, code reviews, and the habit of shipping in a large engineering organisation.",
    bullets: [
      "Contributed to internal software delivery under IBM engineering standards and review.",
      "Worked on-site with a product team — design, implementation, and test in a short, focused internship.",
    ],
  },
];

export const education = [
  {
    title: "MSc Computer Science",
    org: "University of Warwick",
    dates: "2007 — 2008",
    detail: "Postgraduate computer science at Warwick, following a first degree in the same department.",
  },
  {
    title: "BSc Computer Science",
    org: "University of Warwick",
    dates: "2004 — 2007",
    detail: "Undergraduate computer science — software engineering, systems, and the foundations I still use on the tools.",
  },
];

export const certifications: { name: string; org: string; year: string }[] = [];

export const skillGroups = [
  {
    id: "cloud",
    title: "Cloud & platforms",
    items: [
      "AWS (EKS, ECS, VPC, IAM, RDS, KMS, Route 53, Lambda)",
      "Kubernetes · Helm · Kustomize · Karpenter",
      "Linux estates · Docker · networking",
      "Healthcare and banking delivery constraints",
    ],
  },
  {
    id: "delivery",
    title: "Delivery & IaC",
    items: [
      "Terraform · Packer · Ansible",
      "Argo CD · GitHub Actions · Jenkins",
      "GitOps · Helm · environment promotion",
      "Ephemeral previews · OIDC federation",
    ],
  },
  {
    id: "observe",
    title: "Reliability & security",
    items: [
      "Prometheus · Grafana · ELK · CloudWatch",
      "SLOs · incident command · RCA",
      "Vault · secrets hygiene · least privilege",
      "Change control for regulated workloads",
    ],
  },
  {
    id: "lang",
    title: "Languages & adjacent",
    items: [
      "Python · Bash · Java",
      "SQL · Linux tooling",
      "CI/CD design · runbooks",
      "Mentoring · on-call · stakeholder delivery",
    ],
  },
];

export const projectFilters = ["All", "Kubernetes", "GitOps", "Observability", "Security", "Healthcare"];

export const projects = [
  {
    id: "control-plane",
    title: "Anchorstacktech delivery platform",
    impact: "Senior DevOps · 2019 — 2026",
    filters: ["Kubernetes", "GitOps"],
    tags: ["Kubernetes", "Terraform", "Argo CD", "AWS"],
    summary:
      "The control plane I ran at Anchorstacktech: versioned infrastructure, GitOps promotion, and clusters that product teams could use without opening a ticket for every change.",
    points: [
      "Terraform modules for network, EKS, IAM, and data stores",
      "Argo CD sync with Helm overlays per environment",
      "Rollback is a git revert — not a bridge call",
    ],
  },
  {
    id: "healthcare",
    title: "System C environment factory",
    impact: "Healthcare platforms · 2014 — 2019",
    filters: ["Healthcare", "GitOps"],
    tags: ["Terraform", "Jenkins", "Ansible", "Healthcare"],
    summary:
      "Repeatable environments for clinical and operational systems at System C. The goal was simple: a new stack that looked like production, without a week of snowflake setup.",
    points: [
      "Terraform and Ansible as the only supported bootstrap",
      "Jenkins promotions with a written rollback",
      "Access and change records fit for healthcare delivery",
    ],
  },
  {
    id: "observe",
    title: "Observability that pages the right person",
    impact: "On-call that names an owner",
    filters: ["Observability"],
    tags: ["Prometheus", "Grafana", "ELK", "PagerDuty"],
    summary:
      "Replaced a graveyard of red dashboards with a small set of signals. If an alert cannot name a service and a person, it does not ship.",
    points: [
      "SLIs on the paths that clinics and product actually use",
      "Logs and metrics in one investigation story",
      "Alert routing that stops at a team, not a channel",
    ],
  },
  {
    id: "oidc",
    title: "Credential-free delivery",
    impact: "No long-lived cloud keys in CI",
    filters: ["Security", "GitOps"],
    tags: ["OIDC", "GitHub Actions", "IAM", "Vault"],
    summary:
      "Removed static cloud keys from pipelines. Jobs assume a role; humans use SSO; secrets do not live in a variable store forever.",
    points: [
      "OIDC from GitHub Actions into AWS IAM",
      "Vault for application secrets",
      "Break-glass documented and tested",
    ],
  },
  {
    id: "bank-delivery",
    title: "Aldermore release discipline",
    impact: "Banking software · 2009 — 2014",
    filters: ["Security"],
    tags: ["CI", "Banking", "Linux", "Change control"],
    summary:
      "Application delivery inside a UK bank: automated builds, documented change, and the operational habits I later turned into a DevOps practice.",
    points: [
      "Build and test automation for banking products",
      "Release windows with a known owner",
      "Production support alongside feature work",
    ],
  },
  {
    id: "homelab",
    title: "This site as a delivery demo",
    impact: "Push to main → live",
    filters: ["GitOps"],
    tags: ["GitHub Actions", "Nginx", "TLS", "IaC"],
    summary:
      "The portfolio itself is a small production system: static build, pipeline, immutable artefact, and a rollback that is one git revert. Same discipline as the platforms I run.",
    points: [
      "GitHub Actions build and artefact publish",
      "TLS and caching at the edge",
      "Infrastructure defined beside the app",
    ],
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
