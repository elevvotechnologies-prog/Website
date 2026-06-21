import useReveal from "../hooks/useReveal";

export default function SvcCard({ s, delay }) {
  const ref = useReveal();
  const IC = s.IconComp;

  return (
    <div ref={ref} className={`reveal reveal-scale reveal-d${delay}`}>
      <div className="glass" style={{ padding: 26, height: "100%" }}>
        <div
          className="icon-box"
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: s.bg,
            border: "1px solid " + s.bd,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 4px 14px " + s.color + "18",
          }}
        >
          <IC />
        </div>
        <div className="df" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: s.color, marginBottom: 6 }}>
          {s.sub}
        </div>
        <h3 className="df" style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: "#0F172A", letterSpacing: "-0.3px" }}>
          {s.title}
        </h3>
        <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>
          {s.desc.substring(0, 115)}…
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {s.features.slice(0, 3).map((feature) => (
            <span key={feature} className="tag">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
