import React from "react";
import "./AnalyticsReports.css";

const reports = [
  {
    name: "Financial reporting",
    value: "90%",
    color: "#5B50D9",
  },
  {
    name: "Business proposal",
    value: "70%",
    color: "#FFC43D",
  },
  {
    name: "Update leadership",
    value: "50%",
    color: "#12BBD6",
  },
  {
    name: "Onboarding plan",
    value: "28%",
    color: "#EF3D23",
  },
];

function AnalyticsChart() {
  return (
    <div className="analytics-chart">
      <svg
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer purple ring */}
        <circle
          cx="110"
          cy="110"
          r="88"
          fill="none"
          stroke="#F5F7FC"
          strokeWidth="13"
        />

        <circle
          className="chart-ring chart-purple"
          cx="110"
          cy="110"
          r="88"
          fill="none"
          stroke="#5B50D9"
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray="445 553"
          strokeDashoffset="65"
        />

        {/* Yellow ring */}
        <circle
          cx="110"
          cy="110"
          r="70"
          fill="none"
          stroke="#F5F7FC"
          strokeWidth="12"
        />

        <circle
          className="chart-ring"
          cx="110"
          cy="110"
          r="70"
          fill="none"
          stroke="#FFC43D"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="307 440"
          strokeDashoffset="45"
        />

        {/* Cyan ring */}
        <circle
          cx="110"
          cy="110"
          r="52"
          fill="none"
          stroke="#F5F7FC"
          strokeWidth="11"
        />

        <circle
          className="chart-ring"
          cx="110"
          cy="110"
          r="52"
          fill="none"
          stroke="#12BBD6"
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray="163 327"
          strokeDashoffset="38"
        />

        {/* Red ring */}
        <circle
          cx="110"
          cy="110"
          r="34"
          fill="none"
          stroke="#F5F7FC"
          strokeWidth="10"
        />

        <circle
          className="chart-ring"
          cx="110"
          cy="110"
          r="34"
          fill="none"
          stroke="#EF3D23"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="60 214"
          strokeDashoffset="30"
        />
      </svg>
    </div>
  );
}

function AnalyticsReports() {
  return (
    <div className="analytics-reports">

      <h3>Analytics Reports</h3>

      <AnalyticsChart />

      <div className="analytics-report-list">
        {reports.map((report) => (
          <div
            className="analytics-report-row"
            key={report.name}
          >
            <span
              className="report-color-line"
              style={{
                backgroundColor: report.color,
              }}
            />

            <span className="report-name">
              {report.name}
            </span>

            <span className="report-percent">
              <span className="report-dash">–</span>

              <span className="report-value">
                {report.value}
              </span>
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AnalyticsReports;