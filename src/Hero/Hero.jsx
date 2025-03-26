import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import companies from "../data/companies";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-hero-navbar">
      <div className="hero-content-container">
        <div className="hero-container">
          <div className="py-16 text-center rounded-xl">
            <h2 className="hero-heading">Find Your Dream Job Today!</h2>
            <p className="hero-subheading">
              Connecting Talent with Opportunity - Your Gateway to Career
              Success
            </p>
            <div className="search-bar">
              <div className="search-input-container">
                <BusinessCenterIcon className="search-icon" />
                <input
                  type="text"
                  placeholder="Job Title or Company"
                  aria-label="Search job by title or company"
                  className="search-input"
                />
              </div>
              <div className="search-input-container">
                <LocationOnOutlinedIcon className="search-icon" />
                <input
                  type="text"
                  placeholder="Location"
                  aria-label="Search location"
                  className="search-input"
                />
              </div>
              <button className="search-button">
                <SearchIcon className="search-btn-icon" />
                <span>Search</span>
              </button>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-icon">
                  <BusinessCenterIcon />
                </div>
                <div className="stat-text">
                  <h3>25,800</h3>
                  <p>Jobs</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <PeopleIcon />
                </div>
                <div className="stat-text">
                  <h3>25,800</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <ApartmentIcon />
                </div>
                <div className="stat-text">
                  <h3>25,800</h3>
                  <p>Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="companies-section">
        <div className="companies-wrapper">
          {companies.map((company) => (
            <div key={company.id} className="company-logo">
              <img
                src={company.path}
                alt={company.name}
                className="company-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
