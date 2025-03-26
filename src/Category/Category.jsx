import React from "react";
import "./Category.css";

import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MonitorIcon from "@mui/icons-material/Monitor";
import StorageIcon from "@mui/icons-material/Storage";

const categories = [
  {
    icon: <CodeIcon />,
    title: "Software Development",
    description: "Creating and maintaining software applications.",
  },
  {
    icon: <SettingsIcon />,
    title: "DevOps & Automation",
    description:
      "Automating processes and improving developer-operations collaboration.",
  },
  {
    icon: <SecurityIcon />,
    title: "Cybersecurity",
    description: "Protecting systems and data from cyberattacks.",
  },
  {
    icon: <PsychologyIcon />,
    title: "Machine Learning",
    description: "Developing algorithms that allow systems to learn from data.",
  },
  {
    icon: <MonitorIcon />,
    title: "Software Testing",
    description:
      "Testing applications to identify errors and ensure proper functionality.",
  },
  {
    icon: <StorageIcon />,
    title: "Database Management",
    description: "Managing databases to ensure accessibility and security.",
  },
];

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-wrapper">
        {/* Section Title */}
        <div className="section-title">
          <h1>Browse by Category</h1>
          <p>
            Explore the job categories and find the opportunities that best
            match your skills.
          </p>
        </div>
        {/* Categories */}
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <div className="jobs-count">1827 Jobs</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
