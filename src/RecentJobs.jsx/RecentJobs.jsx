import "./RecentJobs.css";
import jobs from "../data/jobs.js";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RecentJobs = () => {
  //  pentru a obține iconița companiei
  const getCompanyIcon = (company) => {
    const iconProps = {
      className: `company-icon ${company.toLowerCase()}-bg`,
      style: { fontSize: "2rem" },
    };

    switch (company) {
      case "Google":
        return <GoogleIcon {...iconProps} />;
      case "Apple":
        return <AppleIcon {...iconProps} />;
      case "Microsoft":
        return <MicrosoftIcon {...iconProps} />;
      default:
        return (
          <div className={`company-initial ${company.toLowerCase()}-bg`}>
            {company.charAt(0)}
          </div>
        );
    }
  };

  return (
    <div className="recent-jobs-container">
      <h1 className="section-title">Recent Jobs Available</h1>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <div className="company-logo">{getCompanyIcon(job.company)}</div>
              <div className="job-title-container">
                <h2>{job.title}</h2>
                <p className="company-name">{job.company}</p>
              </div>
            </div>

            <div className="job-details">
              <div className="detail-item">
                <WorkOutlineIcon className="detail-icon" />
                <span>{job.type}</span>
              </div>
              <div className="detail-item">
                <AttachMoneyIcon className="detail-icon" />
                <span>{job.salary}</span>
              </div>
              <div className="detail-item">
                <LocationOnIcon className="detail-icon" />
                <span>{job.location}</span>
              </div>
            </div>

            <div className="job-footer">
              <span className="time-posted">10 min ago</span>
              <button className="details-button">
                Apply Now <ArrowForwardIcon className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-button">View All</button>
    </div>
  );
};

export default RecentJobs;
