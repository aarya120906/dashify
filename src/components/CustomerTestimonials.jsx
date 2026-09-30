import React from "react";
import "./CustomerTestimonials.css";

import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";

const testimonialsTop = [
  {
    name: "Emily Chang",
    role: "CEO & Founder",
    avatar: avatar1,
    text: "As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are.",
  },
  {
    name: "Floyd Miles",
    role: "CEO & Founder",
    avatar: avatar2,
    text: "As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are.",
  },
  {
    name: "Emily Chang",
    role: "CEO & Founder",
    avatar: avatar3,
    text: "As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are.",
  },
];

const testimonialsBottom = [
  {
    name: "Emily Chang",
    role: "CEO & Founder",
    avatar: avatar4,
    text: "Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time.",
  },
  {
    name: "Samantha",
    role: "CEO & Founder",
    avatar: avatar1,
    text: "Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time.",
  },
  {
    name: "Floyd Miles",
    role: "CEO & Founder",
    avatar: avatar2,
    text: "Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time.",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-user">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
        />

        <div className="testimonial-user-info">
          <h3>{testimonial.name}</h3>
          <span>{testimonial.role}</span>
        </div>
      </div>

      <p className="testimonial-text">
        {testimonial.text}
      </p>

      <div className="testimonial-divider"></div>

      <div className="testimonial-stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
}

function CustomerTestimonials() {
  return (
    <section className="customer-testimonials">

      <h2>What our customer say</h2>

      <div className="testimonial-slider">

        {/* =========================
            TOP ROW
        ========================= */}

        <div className="testimonial-marquee testimonial-marquee-top">
          <div className="testimonial-track">

            {testimonialsTop.map((testimonial, index) => (
              <TestimonialCard
                key={`top-first-${index}`}
                testimonial={testimonial}
              />
            ))}

            {/* DUPLICATE FOR SEAMLESS MARQUEE */}

            {testimonialsTop.map((testimonial, index) => (
              <TestimonialCard
                key={`top-second-${index}`}
                testimonial={testimonial}
              />
            ))}

          </div>
        </div>


        {/* =========================
            BOTTOM ROW
        ========================= */}

        <div className="testimonial-marquee testimonial-marquee-bottom">
          <div className="testimonial-track">

            {testimonialsBottom.map((testimonial, index) => (
              <TestimonialCard
                key={`bottom-first-${index}`}
                testimonial={testimonial}
              />
            ))}

            {/* DUPLICATE FOR SEAMLESS MARQUEE */}

            {testimonialsBottom.map((testimonial, index) => (
              <TestimonialCard
                key={`bottom-second-${index}`}
                testimonial={testimonial}
              />
            ))}

          </div>
        </div>

      </div>

    </section>
  );
}

export default CustomerTestimonials;