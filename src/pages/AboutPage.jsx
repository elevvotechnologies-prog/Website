import React from "react";
import useReveal from "../hooks/useReveal";
import { TEAM } from "../data/content";

export default function AboutPage() {
  const headRef = useReveal();
  const storyRef = useReveal();
  const timeRef = useReveal();
  const valsRef = useReveal();
  const teamRef = useReveal();
  const vals = [
    { icon: "💡", t: "Innovation", d: "We constantly push boundaries to find smarter ways to solve your challenges." },
    { icon: "🧩", t: "Collaboration", d: "Your team and ours, working as one. Every project is a shared journey." },
    { icon: "📐", t: "Quality", d: "We sweat the details. Every line of code, every workflow — crafted with care." },
    { icon: "🌍", t: "Impact", d: "We measure success not in deployments, but in real business outcomes." },
  ];
  const timeline = [
    { y: "2016", l: "Founded", d: "Launched as a focused Microsoft D365 consultancy" },
    { y: "2018", l: "Expanded", d: "Added Power Platform and custom software practice" },
    { y: "2020", l: "Scaled", d: "Grew to 40+ engineers across multiple continents" },
    { y: "2025", l: "Today", d: "150+ projects, 98% client satisfaction rate" },
  ];

  const valRefs = vals.map(() => useReveal());
  const memberRefs = TEAM.map(() => useReveal());

  return (
    <div style={{ padding: "100px 36px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="reveal" style={{ marginBottom: 40 }}>
          <h1 className="df ph" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-2.5px", marginBottom: 16, maxWidth: 820, color: "#0F172A", lineHeight: 1.06 }}>
            A Team of Builders <span className="gt">Who Love Hard Problems</span>
          </h1>
          <p className="sec-sub" style={{ fontSize: 17, maxWidth: 640 }}>
            Elevvo Technologies was founded on a simple belief: great software, built with the right intentions, changes businesses. We've spent eight years proving it.
          </p>
        </div>
        <div className="divider" style={{ marginBottom: 48 }} />
        <div className="r2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start", marginBottom: 48 }}>
          <div ref={storyRef} className="reveal">
            <h2 className="df" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 18, color: "#0F172A" }}>
              Our Story
            </h2>
            <p className="sec-sub" style={{ fontSize: 15, marginBottom: 14, lineHeight: 1.85 }}>
              Elevvo Technologies started in 2016 as a small team of Microsoft consultants frustrated with cookie-cutter implementations that never quite fit a client's real needs.
            </p>
            <p className="sec-sub" style={{ fontSize: 15, marginBottom: 14, lineHeight: 1.85 }}>
              We grew by listening — really listening — to the businesses we worked with. Over time our capabilities expanded from D365 consulting to a full-service technology practice spanning Power Platform, Azure cloud, and modern web development.
            </p>
            <p className="sec-sub" style={{ fontSize: 15, lineHeight: 1.85 }}>
              Today, we work with businesses of all sizes — all united by a need for technology that truly serves their people.
            </p>
          </div>
          <div ref={timeRef} className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {timeline.map((entry, index) => (
              <div key={entry.y} className={`gs reveal-d${index + 1}`} style={{ padding: 22, borderRadius: 14, borderLeft: "3px solid #5B5FEF" }}>
                <div className="df" style={{ fontSize: 28, fontWeight: 800, color: "#5B5FEF", marginBottom: 2, letterSpacing: "-1px" }}>{entry.y}</div>
                <div className="df" style={{ fontSize: 12, fontWeight: 700, marginBottom: 6, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.7px" }}>{entry.l}</div>
                <p style={{ color: "#64748B", fontSize: 12, lineHeight: 1.65 }}>{entry.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 48 }}>
          <div ref={valsRef} className="reveal" style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 className="df" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A" }}>
              What We Stand For
            </h2>
          </div>
          <div className="r4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {vals.map((value, index) => (
              <div ref={valRefs[index]} key={value.t} className={`reveal reveal-d${index + 1}`}>
                <div className="glass" style={{ padding: 24, textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{value.icon}</div>
                  <h3 className="df" style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: "#0F172A" }}>{value.t}</h3>
                  <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.7 }}>{value.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div ref={teamRef} className="reveal" style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 className="df" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-1.5px", color: "#0F172A" }}>
              Leadership Team
            </h2>
          </div>
          <div className="r4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {TEAM.map((member, index) => (
              <div ref={memberRefs[index]} key={member.name} className={`reveal reveal-d${(index % 4) + 1}`}>
                <div className="glass" style={{ padding: 22, textAlign: "center" }}>
                  <div style={{ width: 54, height: 54, borderRadius: "50%", background: `linear-gradient(135deg,${member.c}88,${member.c})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", boxShadow: `0 4px 14px ${member.c}40` }}>
                    {member.init}
                  </div>
                  <h3 className="df" style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, color: "#0F172A" }}>{member.name}</h3>
                  <p style={{ color: "#94A3B8", fontSize: 11, lineHeight: 1.5 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
