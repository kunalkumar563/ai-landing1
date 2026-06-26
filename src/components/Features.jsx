import { useState, useEffect } from "react";
import { FEATURES } from "../data/data.js";
import BentoCard from "./BentoCard.jsx";

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const [openId, setOpenId] = useState("reasoning");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="features" aria-labelledby="features-heading" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: isMobile ? 40 : 64 }}>
          <span
            style={{
              fontSize: 12,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 700,
            }}
          >
            Capabilities
          </span>
          <h2
            id="features-heading"
            style={{
              fontSize: "clamp(30px,5vw,52px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
              margin: "12px 0 16px",
            }}
          >
            Everything your AI stack needs
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto" }}>
            One platform. Every model. No glue code.
          </p>
        </header>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FEATURES.map((f) => (
              <BentoCard
                key={f.id}
                feature={f}
                isMobile
                isOpen={openId === f.id}
                onToggle={() => setOpenId(openId === f.id ? null : f.id)}
              />
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {FEATURES.map((f) => (
              <BentoCard key={f.id} feature={f} isMobile={false} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}