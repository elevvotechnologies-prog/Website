import useReveal from "../hooks/useReveal";

const items = [
  ["150+", "Projects Delivered"],
  ["98%", "Client Satisfaction"],
  ["8+", "Years Experience"],
  ["40+", "Expert Engineers"],
];

export default function Stats() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal" style={{ borderTop: "1px solid rgba(15,23,42,0.06)", borderBottom: "1px solid rgba(15,23,42,0.06)", padding: "44px 36px", background: "rgba(255,255,255,0.6)" }}>
      <div className="sg" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
        {items.map(([value, label]) => (
          <div key={label}>
            <div className="sn">{value}</div>
            <div style={{ color: "#64748B", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
