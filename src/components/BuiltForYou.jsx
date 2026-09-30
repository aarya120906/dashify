import "./BuiltForYou.css";

function BuiltForYou() {
  return (
    <section className="built-for-you">

      <div className="built-header">
        <h2>Dashify is built for you</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          <br />
          has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="feature-cards">

        {/* CARD 1 */}
        <div className="feature-card">

          <div className="feature-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9 2.5L7.7 16.2C7.1 17.1 7.75 18.3 8.82 18.3H14.1L13.15 27.1C13.02 28.35 14.65 28.8 15.25 27.7L22.3 14.4C22.78 13.48 22.12 12.4 21.08 12.4H16.05L18.55 3.95C18.9 2.77 17.62 1.6 16.9 2.5Z"
                fill="#5B4FE9"
              />
            </svg>
          </div>

          <div className="feature-content">
            <h3>Streamline your work</h3>

            <p>
              Efficiency starts here.
              <br />
              Streamline your work with our
              <br />
              project tracking features.
              <br />
              Simplify tasks and maximize
              <br />
              productivity.
            </p>
          </div>

        </div>


        {/* CARD 2 */}
        <div className="feature-card">

          <div className="feature-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6.5H13.5V11.5H5V6.5Z"
                fill="#5B4FE9"
              />

              <path
                d="M16 5.5C16 4.67 16.67 4 17.5 4H25C25.83 4 26.5 4.67 26.5 5.5V23.5C26.5 24.33 25.83 25 25 25H17.5C16.67 25 16 24.33 16 23.5V19.5H12V23C12 24.1 11.1 25 10 25H5.5C4.67 25 4 24.33 4 23.5V16C4 15.17 4.67 14.5 5.5 14.5H13C13.83 14.5 14.5 15.17 14.5 16V20H16V5.5Z"
                fill="#5B4FE9"
              />
            </svg>
          </div>

          <div className="feature-content">
            <h3>Work with your favorite<br />tools</h3>

            <p>
              Integrate quickly and directly
              <br />
              with your tools you already love.
              <br />
              It’s as easy as 1, 2, 3.
            </p>
          </div>

        </div>


        {/* CARD 3 */}
        <div className="feature-card">

          <div className="feature-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="15"
                r="11"
                fill="#5B4FE9"
              />

              <path
                d="M15 8V15L19.5 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="feature-content">
            <h3>Save hours every week</h3>

            <p>
              Efficiency starts here.
              <br />
              Streamline your work with our
              <br />
              project tracking features.
              <br />
              Simplify tasks and maximize
              <br />
              productivity.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BuiltForYou;