import React, { useEffect, useRef } from "react";
import "./PowerfulFeatures.css";

import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import analyticsReport from "../assets/analytics-report.png";

function PowerfulFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

      const visuals = section.querySelectorAll(".parallax-visual");

      visuals.forEach((visual, index) => {
        const amount = index % 2 === 0 ? 18 : -18;
        const movement = (progress - 0.5) * amount;

        visual.style.transform = `translateY(${movement}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="powerful-features"
    >
      {/* ================= HEADER ================= */}

      <div className="powerful-header">
        <h2>Powerful features</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
          <br />
          has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      {/* ================= FEATURE 1 ================= */}

      <div className="powerful-feature feature-one">
        <div className="powerful-text">
          <span className="feature-badge">
            Easy admin
          </span>

          <h3>
            Take the pain out of
            <br />
            company admin
          </h3>

          <p>
            Eliminate the hassle, nobody wants it. Take the pain out of
            <br />
            company admin with our all-in-one platform. Simplify
            <br />
            projects and focus on what really drives your business
            <br />
            forward.
          </p>
        </div>

        {/* Analytics image */}

        <div className="feature-visual analytics-visual parallax-visual">
          <div className="visual-decoration top-right"></div>

          <div className="visual-decoration top-right-2"></div>

          <div className="analytics-image">
            <img
              src={analyticsReport}
              alt="Analytics Reports"
            />
          </div>
        </div>
      </div>

      {/* ================= FEATURE 2 ================= */}

      <div className="powerful-feature feature-two">
        <div className="feature-visual employee-visual parallax-visual">
          <div className="visual-decoration bottom-left"></div>

          <div className="visual-decoration bottom-left-2"></div>

          {/* Growth card */}

          <div className="growth-card">
            <div className="growth-avatars">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
              <img src={avatar4} alt="" />
            </div>

            <div className="growth-number">
              +18%
            </div>

            <span>Growth</span>
          </div>

          {/* Employees card */}

          <div className="employees-feature-card">
            <div className="employees-feature-header">
              <div className="employees-mini-icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9"
                    cy="8"
                    r="3.5"
                    stroke="#6255E8"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M3.5 19C3.5 15.96 5.96 13.5 9 13.5C12.04 13.5 14.5 15.96 14.5 19"
                    stroke="#6255E8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="16.5"
                    cy="9"
                    r="2.5"
                    stroke="#6255E8"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <span>Employees</span>
            </div>

            <div className="employees-feature-number">
              340
            </div>

            <div className="employees-feature-footer">
              <span className="employee-growth">
                ↗ 07.50%
              </span>

              <span>
                Last 6 days
              </span>
            </div>

            <div className="employee-chart">
              <svg
                viewBox="0 0 100 65"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="employeeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7168F0"
                      stopOpacity="0.28"
                    />

                    <stop
                      offset="100%"
                      stopColor="#7168F0"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 55 C10 55 13 52 20 52 C27 52 29 30 37 34 C45 38 47 51 56 47 C66 42 65 20 73 23 C81 26 83 31 88 20 C93 9 96 4 100 0 L100 65 L0 65 Z"
                  fill="url(#employeeGradient)"
                />

                <path
                  d="M0 55 C10 55 13 52 20 52 C27 52 29 30 37 34 C45 38 47 51 56 47 C66 42 65 20 73 23 C81 26 83 31 88 20 C93 9 96 4 100 0"
                  fill="none"
                  stroke="#6255E8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="powerful-text second-text">
          <span className="feature-badge">
            Ready for scale
          </span>

          <h3>
            Grow with your
            <br />
            Business
          </h3>

          <p>
            Now you can grow confidently, nothing holding you back.
            <br />
            Our platform grows as you grow. Adapting to your needs.
            <br />
            Scale from a pre-seed startup to public company with
            <br />
            Dashify.
          </p>
        </div>
      </div>

      {/* ================= FEATURE 3 ================= */}

      <div className="powerful-feature feature-three">
        <div className="powerful-text">
          <span className="feature-badge">
            Central Platform
          </span>

          <h3>
            Manage your team in
            <br />
            one place
          </h3>

          <p>
            Centralize your team management. Manage your entire
            <br />
            team in one tool. Easy communication, project
            <br />
            management, and smooth collaboration with your team.
          </p>
        </div>

        <div className="feature-visual team-visual parallax-visual">
          <div className="visual-decoration top-right"></div>

          <div className="visual-decoration top-right-2"></div>

          <div className="team-card">
            <h4>Team List</h4>

            <div className="team-row">
              <img src={avatar1} alt="" />
              <span>Dianne Russell</span>
              <small className="marketing">
                Marketing
              </small>
            </div>

            <div className="team-row">
              <img src={avatar2} alt="" />
              <span>Bessie Cooper</span>
              <small className="design">
                Design
              </small>
            </div>

            <div className="team-row">
              <img src={avatar3} alt="" />
              <span>Floyd Miles</span>
              <small className="finance">
                Finance
              </small>
            </div>

            <div className="team-row">
              <img src={avatar4} alt="" />
              <span>Esther Howard</span>
              <small className="development">
                Development
              </small>
            </div>

            <div className="team-row">
              <img src={avatar3} alt="" />
              <span>Floyd Miles</span>
              <small className="finance">
                Finance
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerfulFeatures;