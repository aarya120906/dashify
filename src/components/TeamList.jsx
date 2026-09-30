import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";

function TeamList() {
  return (
    <div className="team-list-card">

      <h3>Team List</h3>

      <div className="team-member">
        <div className="member-info">
          <img src={avatar1} alt="" />
          <span>Dianne Russell</span>
        </div>

        <span className="department marketing">
          Marketing
        </span>
      </div>

      <div className="team-member">
        <div className="member-info">
          <img src={avatar2} alt="" />
          <span>Bessie Cooper</span>
        </div>

        <span className="department design">
          Design
        </span>
      </div>

      <div className="team-member">
        <div className="member-info">
          <img src={avatar3} alt="" />
          <span>Floyd Miles</span>
        </div>

        <span className="department finance">
          Finance
        </span>
      </div>

      <div className="team-member">
        <div className="member-info">
          <img src={avatar4} alt="" />
          <span>Esther Howard</span>
        </div>

        <span className="department development">
          Development
        </span>
      </div>

    </div>
  );
}

export default TeamList;