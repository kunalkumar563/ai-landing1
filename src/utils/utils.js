// ─────────────────────────────────────────────────────────────────────────────
// utils.js
// Shared pure helper functions and reusable inline-style objects.
// No React, no side-effects — safe to import anywhere.
// ─────────────────────────────────────────────────────────────────────────────

import { PRICING_CONFIG } from "../data/data.js";

// ─── Price Formatter ──────────────────────────────────────────────────────────

/**
 * Converts a base INR amount to the requested currency and returns a
 * formatted string with the correct symbol.
 *
 * @param {number} inrAmount  - The price in Indian Rupees (base currency).
 * @param {string} currency   - A key from PRICING_CONFIG.currencies ("INR" | "USD" | "EUR").
 * @returns {string}          - e.g. "₹3,499"  |  "$41"  |  "€38"
 */
export function formatPrice(inrAmount, currency) {
  const cfg = PRICING_CONFIG.currencies[currency];
  const amount = inrAmount * cfg.rate;

  if (currency === "INR") {
    return `${cfg.symbol}${Math.round(amount).toLocaleString("en-IN")}`;
  }

  return `${cfg.symbol}${amount < 10 ? amount.toFixed(2) : Math.round(amount)}`;
}

// ─── Glassmorphism Style Objects ──────────────────────────────────────────────

/**
 * Standard frosted-glass card surface.
 * Spread into any inline `style` prop: { ...glass, borderRadius: 16 }
 */
export const glass = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
};

/**
 * Highlighted (indigo-tinted) frosted-glass surface.
 * Used for the "Most Popular" pricing card and other hero surfaces.
 */
export const glassHighlight = {
  background: "rgba(99,102,241,0.12)",
  border: "1px solid rgba(99,102,241,0.35)",
  backdropFilter: "blur(16px)",
};