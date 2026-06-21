import React from "react";
import useReveal from "../hooks/useReveal";
import { JOBS } from "../data/content";

export default function CareersPage() {
  const headRef = useReveal();
  const jobsRef = useReveal();
  const perks = [
    { icon: "🏡", t: "Remote-First", d: "Work from wherever you do your best thinking." },
    { icon: "📈", t: "Growth Path", d: "Clear progression tracks and mentoring at every level." },
    { icon: "🎓", t: "$2K Learning Budget", d: "For courses, certifications, and conferences annually." },
    { icon: "🏥", t: "Full Health Coverage", d: "Comprehensive health, dental, and vision benefits." },
    { icon: "⏰", t: "Flexible Hours", d: "Async-friendly culture that respects your time and focus." },
    { icon: "🌴", t: "25 Days PTO", d: "Plus your national holidays — no questions asked." },
  ];

  const perkRefs = perks.map(() => useReveal());

  return (
    <div style={{ padding: "100px 36px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} className="reveal" style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 className="df ph" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-2.5px", marginBottom: 14, color: "#0F172A", lineHeight: 1.06 }}>
            Build Your Career<br />
            <span className="gt">With Us</span>
          </h1>
          <p className="sec-sub" style={{ maxWidth: 520, margin: "0 auto", fontSize: 16 }}>
            We're a team of curious builders, problem-solvers, and lifelong learners. If that sounds like you, we'd love to talk.
          </p>
        </div>
        <div className="r3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 40 }}>
          {perks.map((perk, index) => (
            <div ref={perkRefs[index]} key={perk.t} className={`reveal reveal-d${(index % 3) + 1}`}>
              <div className="glass" style={{ padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{perk.icon}</div>
                <h3 className="df" style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: "#0F172A" }}>{perk.t}</h3>
                <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65 }}>{perk.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div ref={jobsRef} className="reveal">
          <h2 className="df" style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1.2px", marginBottom: 20, color: "#0F172A" }}>
            Open Positions
          </h2>
          <div style={{ display: "grid", gap: 11, marginBottom: 32 }}>
            {JOBS.map((job) => (
              <div key={job.title} className="ccard">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ padding: "2px 10px", background: "rgba(91,95,239,0.1)", border: "1px solid rgba(91,95,239,0.22)", borderRadius: 50, fontSize: 10, color: "#4347C4", fontFamily: "'Sora',sans-serif", fontWeight: 700, letterSpacing: "0.4px" }}>{job.dept}</span>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>{job.type}</span>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>📍 {job.loc}</span>
                    </div>
                    <h3 className="df" style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", letterSpacing: "-0.3px" }}>{job.title}</h3>
                  </div>
                  <button className="btn-p" style={{ padding: "8px 18px", fontSize: 12 }}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 36, background: "rgba(91,95,239,0.05)", border: "1px solid rgba(91,95,239,0.11)", borderRadius: 18, textAlign: "center" }}>
            <h3 className="df" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0F172A" }}>Don't See a Fit?</h3>
            <p style={{ color: "#64748B", marginBottom: 22, fontSize: 14 }}>We're always looking for exceptional people. Send us your details and let's start a conversation.</p>
            <button className="btn-o">Send Open Application</button>
          </div>
        </div>
      </div>
    </div>
  );
}
