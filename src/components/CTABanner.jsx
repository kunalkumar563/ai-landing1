import { glass } from "../utils/utils.js";

export default function CTABanner() {
  return (
    <section aria-label="Call to action" style={{ padding: "80px 24px" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "linear-gradient(135deg,rgba(99,102,241,0.2) 0%,rgba(139,92,246,0.15) 50%,rgba(236,72,153,0.1) 100%)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: 28,
          padding: "64px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(28px,5vw,52px)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.04em",
            margin: "0 0 16px",
            position: "relative",
          }}
        >
          Build your first AI feature{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#6366f1,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            today
          </span>
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "0 auto 40px",
            maxWidth: 500,
            position: "relative",
          }}
        >
          50,000 free tokens. No credit card. Deploy in under 5 minutes.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
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
              padding: "14px 36px",
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
            Start for free →
          </a>

          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.25)";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.color = "rgba(255,255,255,0.65)";
            }}
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}