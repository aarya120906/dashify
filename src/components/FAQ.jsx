import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How does Dashify work?",
    answer:
      "Dashify is like your team’s HQ. It brings all your communication, tasks, and files together in one easy-to-use place. It helps you work better together and get stuff done faster.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is protected with secure infrastructure and privacy-focused systems designed to keep your information safe.",
  },
  {
    question: "Does Dashify work well for large teams?",
    answer:
      "Yes. Dashify is designed to help teams of different sizes communicate, organize projects, and collaborate efficiently.",
  },
  {
    question: "How do I create a new account?",
    answer:
      "Creating an account is simple. Sign up with your email, complete your details, and you can start using Dashify right away.",
  },
];

function FAQ() {
  // First FAQ is open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className="faq-section">

      {/* LEFT SIDE */}
      <div className="faq-intro">
        <h2>
          Frequently asked
          <br />
          questions
        </h2>

        <p>
          Have questions? We’ve got answers. For everything
          <br />
          else email us on{" "}
          <a href="mailto:hi@gmail.com">
            hi@gmail.com
          </a>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`faq-item ${
                isOpen ? "faq-item-open" : ""
              }`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>

                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default FAQ;