import React, { useState } from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Basic",
    monthly: 26,
    yearly: 280,
    features: [
      "2 seats",
      "Simple support",
      "Simple onboarding features",
    ],
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 529,
    features: [
      "5 seats",
      "Expert support",
      "Monthly payroll",
      "Third party integrations",
      "Advanced onboarding features",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 179,
    yearly: 1933,
    features: [
      "Unlimited seats",
      "Priority 1–1 support",
      "Monthly payroll",
      "Third party integrations",
      "Advanced onboarding features",
      "Dedicated HR expert",
      "Custom admin permission",
    ],
  },
];

function CheckIcon({ purple = true }) {
  return (
    <span className={`pricing-check ${purple ? "purple-check" : ""}`}>
      ✓
    </span>
  );
}

function PricingCard({ plan, yearly }) {
  const price = yearly ? plan.yearly : plan.monthly;

  return (
    <div
      className={`pricing-card ${
        plan.popular ? "pricing-card-pro" : ""
      }`}
    >
      {/* decorative squares */}
      <div className="pricing-square square-one"></div>
      <div className="pricing-square square-two"></div>
      <div className="pricing-square square-three"></div>

      <div className="pricing-card-content">

        {/* CARD HEADER */}

        <div className="pricing-card-header">

          <span className="pricing-plan-name">
            {plan.name}
          </span>

          {plan.popular && (
            <span className="popular-badge">
              Popular
            </span>
          )}

        </div>


        {/* PRICE */}

        <div className="pricing-price">

          <span className="price-value">
            ${price}
          </span>

          <span className="price-period">
            / mo
          </span>

        </div>


        <div className="pricing-divider"></div>


        {/* FEATURES */}

        <div className="pricing-features">

          {plan.features.map((feature, index) => (
            <div
              className="pricing-feature"
              key={index}
            >
              <CheckIcon purple={!plan.popular} />

              <span>{feature}</span>
            </div>
          ))}

        </div>

      </div>


      {/* BUTTON */}

      <button className="choose-plan">
        <span>Choose plan</span>
        <span className="choose-arrow">→</span>
      </button>

    </div>
  );
}

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="pricing-section">

      {/* =================================
          HEADER
      ================================= */}

      <div className="pricing-header">

        <h2>
          Transparent pricing for you
          <br />
          and your team
        </h2>

        <p>
          Transparent pricing, with clear, accessible rates. Everyone can focus
          <br />
          on what matters most — achieving your goals.
        </p>

      </div>


      {/* =================================
          TOGGLE
      ================================= */}

      <div className="billing-toggle">

        <span
          className={!yearly ? "billing-active" : ""}
        >
          Monthly
        </span>

        <button
          className={`toggle-switch ${
            yearly ? "toggle-yearly" : ""
          }`}
          onClick={() => setYearly(!yearly)}
          aria-label="Toggle billing"
        >
          <span></span>
        </button>

        <span
          className={yearly ? "billing-active yearly-text" : ""}
        >
          Yearly
        </span>

        <span className="discount-badge">
          -10%
        </span>

      </div>


      {/* =================================
          CARDS
      ================================= */}

      <div className="pricing-cards">

        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            yearly={yearly}
          />
        ))}

      </div>

    </section>
  );
}

export default Pricing;