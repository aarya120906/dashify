import "./TrustedCompanies.css";

import emfire from "../assets/Logos/emfire.png";
import anove from "../assets/Logos/anove.png";
import fls from "../assets/Logos/fls.png";
import genesis from "../assets/Logos/genesis.png";
import bxc from "../assets/Logos/bxc.png";
import twinar from "../assets/Logos/twinar.png";
function LogoItem({ children }) {
  return (
    <div className="trusted-logo">
      {children}
    </div>
  );
}

function TrustedCompanies() {
  return (
    <section className="trusted-companies">

      <h2>Trusted by 8,000 leading companies</h2>

      <div className="trusted-marquee">

        <div className="trusted-marquee-track">

          {/* FIRST SET */}
          <LogoItem>
            <img src={emfire} alt="Emfire" />
          </LogoItem>

          <LogoItem>
            <img src={anove} alt="Anove" />
          </LogoItem>

          <LogoItem>
            <img src={fls} alt="FLS" />
          </LogoItem>

          <LogoItem>
            <img src={genesis} alt="Genesis Developments" />
          </LogoItem>

          <LogoItem>
            <img src={bxc} alt="BXC Consulting" />
          </LogoItem>

          <LogoItem>
            <img src={twinar} alt="Twinar" />
          </LogoItem>

          <LogoItem>
            <div className="playearnode">
              <span className="playearnode-symbol"></span>
              <span className="playearnode-name">
                Playearnode
              </span>
            </div>
          </LogoItem>

          <LogoItem>
            <div className="infibeam">
              <div className="infibeam-symbol"></div>

              <div className="infibeam-name">
                <span>Infibeam</span>
                <span>Avenues</span>
              </div>
            </div>
          </LogoItem>


          {/* SECOND SET - DUPLICATE FOR SEAMLESS LOOP */}

          <LogoItem>
            <img src={emfire} alt="" />
          </LogoItem>

          <LogoItem>
            <img src={anove} alt="" />
          </LogoItem>

          <LogoItem>
            <img src={fls} alt="" />
          </LogoItem>

          <LogoItem>
            <img src={genesis} alt="" />
          </LogoItem>

          <LogoItem>
            <img src={bxc} alt="" />
          </LogoItem>

          <LogoItem>
            <img src={twinar} alt="" />
          </LogoItem>

          <LogoItem>
            <div className="playearnode">
              <span className="playearnode-symbol"></span>
              <span className="playearnode-name">
                Playearnode
              </span>
            </div>
          </LogoItem>

          <LogoItem>
            <div className="infibeam">
              <div className="infibeam-symbol"></div>

              <div className="infibeam-name">
                <span>Infibeam</span>
                <span>Avenues</span>
              </div>
            </div>
          </LogoItem>

        </div>

      </div>

    </section>
  );
}

export default TrustedCompanies;