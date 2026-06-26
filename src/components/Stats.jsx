import { STATS } from "../data/data.js";
import AnimatedCounter from "../AnimatedCounter.jsx";
import { glass } from "../utils/utils.js";

export default function Stats() {
  return (
    <section aria-label="Statistics" style={{ padding: "64px 24px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 24,
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              ...glass,
              borderRadius: 20,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.04em",
                marginBottom: 8,
              }}
            >
              <AnimatedCounter value={s.value} />
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
