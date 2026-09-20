const pipeline = [
  { id: "01", name: "Commit", meta: "main" },
  { id: "02", name: "Actions", meta: "2m 14s" },
  { id: "03", name: "Argo CD", meta: "synced" },
  { id: "04", name: "EKS", meta: "rollout" },
  { id: "05", name: "Probes", meta: "200 OK" },
];

const clusters = [
  { name: "prod-euw2-a", nodes: 12, pods: 148, cpu: "41%", status: "Ready" },
  { name: "prod-euw1-b", nodes: 11, pods: 141, cpu: "38%", status: "Ready" },
];

const slos = [
  { name: "checkout", value: "99.97%", tone: "good" },
  { name: "payments", value: "99.95%", tone: "good" },
  { name: "deploy p95", value: "90s", tone: "good" },
  { name: "error budget", value: "92%", tone: "warn" },
];

export default function Topology() {
  return (
    <div className="console" aria-label="Production control plane">
      <div className="console-strip">
        <span className="live">
          <i /> live
        </span>
        <span>eu-west-2 · eu-west-1</span>
        <span className="ok">healthy</span>
      </div>

      <div className="pipeline" aria-label="Delivery pipeline">
        {pipeline.map((stage, index) => (
          <div className="stage" key={stage.id}>
            <div className="stage-card">
              <span className="stage-id">{stage.id}</span>
              <strong>{stage.name}</strong>
              <small>{stage.meta}</small>
            </div>
            {index < pipeline.length - 1 ? <span className="stage-link" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>

      <div className="console-grid">
        <div className="cluster-list">
          <p className="console-label">clusters</p>
          {clusters.map((cluster) => (
            <article className="cluster" key={cluster.name}>
              <div>
                <strong>{cluster.name}</strong>
                <span>
                  {cluster.nodes} nodes · {cluster.pods} pods · CPU {cluster.cpu}
                </span>
              </div>
              <em>{cluster.status}</em>
            </article>
          ))}
        </div>
        <div className="slo-list">
          <p className="console-label">service level</p>
          {slos.map((slo) => (
            <div className={`slo ${slo.tone}`} key={slo.name}>
              <span>{slo.name}</span>
              <strong>{slo.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="console-foot">
        <span>Terraform</span>
        <span>Karpenter</span>
        <span>Vault</span>
        <span>OIDC</span>
        <span>last sync 18s ago</span>
      </div>
    </div>
  );
}
