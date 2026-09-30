import React from "react";
import "./EmployeesCard.css";

const EmployeesCard = () => {
  return (
    <div className="employees-card">
      {/* Top section */}
      <div className="employees-header">
        <div className="employees-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="8" r="3.5" stroke="#5B5BF7" strokeWidth="1.5" />
            <path
              d="M3.5 19C3.5 15.96 5.96 13.5 9 13.5C12.04 13.5 14.5 15.96 14.5 19"
              stroke="#5B5BF7"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <circle
              cx="16.5"
              cy="9"
              r="2.5"
              stroke="#5B5BF7"
              strokeWidth="1.5"
            />

            <path
              d="M16.5 13C19.15 13 21 14.8 21 17.2"
              stroke="#5B5BF7"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3>Employees</h3>
      </div>

      {/* Chart */}
      <div className="employees-chart">
        <svg
          viewBox="0 0 120 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6A6AF7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#6A6AF7" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Filled area */}
          <path
            d="
              M0 73
              C8 73 8 72 15 72
              C25 72 27 66 29 55
              C31 45 34 38 42 40
              C50 42 55 55 63 57
              C72 59 77 51 80 43
              C84 33 87 27 95 27
              C103 27 108 24 110 15
              C112 8 115 1 120 0
              L120 90
              L0 90
              Z
            "
            fill="url(#chartGradient)"
          />

          {/* Chart line */}
          <path
            d="
              M0 73
              C8 73 8 72 15 72
              C25 72 27 66 29 55
              C31 45 34 38 42 40
              C50 42 55 55 63 57
              C72 59 77 51 80 43
              C84 33 87 27 95 27
              C103 27 108 24 110 15
              C112 8 115 1 120 0
            "
            fill="none"
            stroke="#5B5BF7"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Number */}
      <div className="employees-number">340</div>

      {/* Bottom information */}
      <div className="employees-footer">
        <span className="growth">
          <span className="arrow">↗</span>
          67.50%
        </span>

        <span className="period">Last 6 days</span>
      </div>
    </div>
  );
};

export default EmployeesCard;