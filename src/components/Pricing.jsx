import { useState } from "react";
import { PRICING_CONFIG } from "../data/data.js";
import { formatPrice, glass, glassHighlight } from "../utils/utils.js";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("INR");
  const { plans, currencies, discountPercent } = PRICING_CONFIG;

  return (
    <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              fontSize: 12,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 700,
            }}
          >
            Pricing
          </span>
          <h2
            id="pricing-heading"
            style={{
              fontSize: "clamp(30px,5vw,52px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
              margin: "12px 0 16px",
            }}
          >
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", maxWidth: 500, margin: "0 auto 36px" }}>
            Start free. Scale as you grow. No surprises.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <div
              style={{
                display: "inline-flex",
                ...glass,
                borderRadius: 100,
                padding: 4,
              }}
            >
              {["monthly", "annual"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  style={{
                    background: billing === b ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "transparent",
                    color: billing === b ? "#fff" : "rgba(255,255,255,0.5)",
                    border: "none",
                    borderRadius: 100,
                    padding: "8px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {b === "annual" ? `Annual (−${discountPercent}%)` : "Monthly"}
                </button>
              ))}
            </div>

            {/* Currency selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                ...glass,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {Object.values(currencies).map((c) => (
                <option key={c.label} value={c.label} style={{ background: "#0d0d1f" }}>
                  {c.symbol} {c.label}
                </option>
              ))}
            </select>
          </div>
        </header>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                ...(plan.highlight ? glassHighlight : glass),
                borderRadius: 24,
                padding: "36px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 16px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{plan.name}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", margin: "0 0 28px", lineHeight: 1.6 }}>
                {plan.desc}
              </p>

              <div style={{ marginBottom: 28 }}>
                <span style={{ fontSize: 42, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>
                  {formatPrice(plan.priceINR[billing], currency)}
                </span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginLeft: 6 }}>/mo</span>
              </div>

              <ul role="list" style={{ listStyle: "none", margin: "0 0 32px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                    <span style={{ color: "#10b981", flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                style={{
                  marginTop: "auto",
                  display: "block",
                  textAlign: "center",
                  background: plan.highlight ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "rgba(255,255,255,0.07)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 24px",
                  borderRadius: 12,
                  border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.target.style.opacity = "1"; e.target.style.transform = "none"; }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
