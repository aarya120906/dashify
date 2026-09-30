import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import EmployeesCard from "./EmployeesCard";
import AnalyticsReports from "./AnalyticsReports";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Streamline Your
          <br />
          Growing Startup
        </h1>

        <p>
          Say goodbye to admin headaches and say hello to efficiency.
          Onboard your employees in minutes, track company projects,
          and manage team performance. We’ve got you covered.
        </p>

        <div className="hero-buttons">

          <button className="hero-primary-btn">
            Get Started
            <span>→</span>
          </button>

          <button className="hero-secondary-btn">
            Learn More
          </button>

        </div>

        <div className="hero-users">

          <div className="user-avatars">

            <div className="avatar">
              <img src={avatar1} alt="" />
            </div>

            <div className="avatar">
              <img src={avatar2} alt="" />
            </div>

            <div className="avatar">
              <img src={avatar3} alt="" />
            </div>

            <div className="avatar">
              <img src={avatar4} alt="" />
            </div>

            <div className="add-user">
              +
            </div>

          </div>

          <div className="users-text">
            <strong>50K</strong>
            <span>Worldwide-users</span>
          </div>

        </div>

      </div>

      {/* Employees Card */}
      <EmployeesCard />
      <AnalyticsReports />

    </section>
  );
}

export default Hero;