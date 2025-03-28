import React from "react";
import "./Team.css";

import team1 from "/images/team1.png";
import team2 from "/images/team2.png";
import team3 from "/images/team3.png";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CallMadeIcon from "@mui/icons-material/CallMade";
import HandshakeIcon from "@mui/icons-material/Handshake";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-content">
        {/* Main heading - moved to top for better mobile flow */}
        <h1 className="main-heading">We're Only Working With The Best</h1>

        <div className="team-grid">
          {/* Image boxes container */}
          <div className="image-boxes">
            <div className="box box-large">
              <img src={team1} alt="Team member 1" className="box-image" />
            </div>
            <div className="box box-medium-top">
              <img src={team2} alt="Team member 2" className="box-image" />
            </div>
            <div className="box box-small-bottom">
              <img src={team3} alt="Team member 3" className="box-image" />
            </div>
          </div>

          {/* Features section */}
          <div className="features-container">
            {/* Quality Job */}
            <div className="feature">
              <div className="icon-container">
                <WorkspacePremiumIcon className="feature-icon" />
              </div>
              <span className="feature-text">Quality Job</span>
            </div>

            {/* Resume Builder */}
            <div className="feature">
              <div className="icon-container">
                <InsertDriveFileIcon className="feature-icon" />
              </div>
              <span className="feature-text">Resume Builder</span>
            </div>

            {/* Top Companies */}
            <div className="feature">
              <div className="icon-container">
                <CallMadeIcon className="feature-icon" />
              </div>
              <span className="feature-text">Top Companies</span>
            </div>

            {/* Top Talents */}
            <div className="feature">
              <div className="icon-container">
                <HandshakeIcon className="feature-icon" />
              </div>
              <span className="feature-text">Top Talents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
