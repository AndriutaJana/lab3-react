import React from "react";
import "./Jobs.css";
import JobsFilter from "../JobsFilter/JobsFilter";
import JobsList from "../JobsList/JobsList";

const Jobs = () => {
  return (
    <div className="jobs-header-container">
      <div>
        <JobsFilter />
      </div>
      <div className="jobs-title">Jobs</div>
    </div>
  );
};

export default Jobs;
