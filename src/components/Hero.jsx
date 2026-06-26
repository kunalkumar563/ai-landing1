import { DASHBOARD_METRICS, DASHBOARD_PIPELINES, TRUSTED_COMPANIES } from "../data/data.js";
import { glass } from "../utils/utils.js";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "15%",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 70%)",
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center,black 30%,transparent 80%)",
          }}
        />
      </div>

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          ...glass,
          borderRadius: 100,
          padding: "6px 16px",
          marginBottom: 32,
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(255,255,255,0.75)",
          animation: "fadeUp 0.6s ease both",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#10b981",
            display: "inline-block",
            boxShadow: "0 0 8px #10b981",
          }}
        />
        Now in public beta — 10B+ tokens processed
        <span style={{ color: "#6366f1", fontWeight: 600 }}>→</span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          color: "#fff",
          maxWidth: 900,
          margin: "0 auto 24px",
          animation: "fadeUp 0.6s 0.1s ease both",
        }}
      >
        The AI infrastructure{" "}
        <span
          style={{
            background: "linear-gradient(135deg,#6366f1 0%,#a78bfa 50%,#ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          your team deserves
        </span>
      </h1>

      {/* Subheadline */}
      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "rgba(255,255,255,0.55)",
          maxWidth: 620,
          margin: "0 auto 44px",
          lineHeight: 1.7,
          animation: "fadeUp 0.6s 0.2s ease both",
        }}
      >
        NexusAI gives every team — from solo builders to Fortune 500s — a single platform to build,
        deploy, and scale AI features with confidence.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeUp 0.6s 0.3s ease both",
        }}
      >
        <a
          href="#pricing"
          style={{
            background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "#fff",
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 700,
            padding: "14px 32px",
            borderRadius: 12,
            boxShadow: "0 0 40px rgba(99,102,241,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 0 60px rgba(99,102,241,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "none";
            e.target.style.boxShadow = "0 0 40px rgba(99,102,241,0.4)";
          }}
        >
          Start building free
        </a>
        <a
          href="#features"
          style={{
            ...glass,
            color: "#fff",
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 600,
            padding: "14px 32px",
            borderRadius: 12,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.08)"; }}
          onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.04)"; }}
        >
          See how it works →
        </a>
      </div>

      {/* AI Dashboard Mock */}
      <div
        aria-hidden="true"
        style={{
          marginTop: 72,
          width: "100%",
          maxWidth: 960,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(99,102,241,0.15), 0 40px 120px rgba(0,0,0,0.6)",
          animation: "fadeUp 0.8s 0.4s ease both",
          position: "relative",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            background: "rgba(20,20,40,0.9)",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffc12e", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#29c940", display: "inline-block" }} />
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              marginLeft: 8,
            }}
          >
            app.nexusai.dev/dashboard
          </div>
        </div>

        {/* Dashboard content */}
        <div style={{ background: "rgba(8,8,22,0.95)", padding: "24px" }}>

          {/* Metric cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 20 }}>
            {DASHBOARD_METRICS.map((m) => (
              <div key={m.label} style={{ ...glass, borderRadius: 12, padding: "14px 16px" }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{m.val}</div>
                <div style={{ fontSize: 11, color: m.col, fontWeight: 600 }}>{m.change}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div
            style={{
              ...glass,
              borderRadius: 14,
              padding: "20px",
              height: 140,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
              Token usage — last 7 days
            </div>
            <svg viewBox="0 0 800 80" preserveAspectRatio="none" style={{ width: "100%", height: 70 }}>
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C80,55 120,45 200,35 C280,25 320,50 400,30 C480,10 520,40 600,20 C680,5 740,15 800,10 L800,80 L0,80Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0,60 C80,55 120,45 200,35 C280,25 320,50 400,30 C480,10 520,40 600,20 C680,5 740,15 800,10"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Pipeline rows */}
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {DASHBOARD_PIPELINES.map((row) => (
              <div
                key={row.name}
                style={{
                  ...glass,
                  borderRadius: 10,
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: row.color,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    {row.name}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{row.tokens} tokens</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: row.color,
                      background: `${row.color}18`,
                      borderRadius: 20,
                      padding: "2px 10px",
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div style={{ marginTop: 56, animation: "fadeUp 0.6s 0.5s ease both" }}>
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 20,
          }}
        >
          Trusted by engineering teams at
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          {TRUSTED_COMPANIES.map((co) => (
            <span
              key={co}
              style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.18)", letterSpacing: "-0.02em" }}
            >
              {co}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}