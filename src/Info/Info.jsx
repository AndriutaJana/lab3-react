import React from "react";
import "./Info.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import WorkIcon from "@mui/icons-material/Work";
import DoneIcon from "@mui/icons-material/Done";

const Info = () => {
  return (
    <div className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-subtitle">
        How You Can Start Finding Opportunities in IT
      </p>

      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <AccountBoxIcon />
          </div>
          <h3 className="step-title">Create Account</h3>
          <p className="step-description">
            Sign up and build your profile to get started.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <UploadFileIcon />
          </div>
          <h3 className="step-title">Upload Resume</h3>
          <p className="step-description">
            Showcase your skills by uploading your resume.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <WorkIcon />
          </div>
          <h3 className="step-title">Find Job</h3>
          <p className="step-description">
            Browse job listings tailored to your expertise.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <DoneIcon />
          </div>
          <h3 className="step-title">Apply Now</h3>
          <p className="step-description">
            Submit your application and take the next step in your career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
