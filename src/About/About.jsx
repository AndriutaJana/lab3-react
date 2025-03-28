import "./About.css";
import aboutHero from "/images/about-hero.png";
import Info from "../Info/Info";
import Faq from "../Faq/Faq";
import Team from "../Team/Team";
import Blog from "../Blog/Blog";

const About = () => {
  return (
    <div className="about-container">
      {/* Header section */}
      <div className="about-header">
        <div className="about-title">About Us</div>
      </div>

      {/* Content section */}
      <div className="content-section">
        <div className="main-title">
          <span className="tech">Tech</span>
          <span className="hire">Hire</span>
          <span className="subtitle">
            {" "}
            - Connecting Talents with Opportunities
          </span>
        </div>

        <div className="description">
          TechHire is more than just a job board — it's a platform that nurtures
          growth, innovation, and career advancement in the IT field. With
          personalized job recommendations and a wide range of opportunities, we
          make it easy for tech professionals to take the next step in their
          careers.
        </div>
      </div>

      {/* Image container */}
      <div className="image-container">
        <img src={aboutHero} alt="TechHire about section" />
      </div>
      <Info />
      <Team />
      <Blog />
      <Faq />
      {/* Footer space */}
      <div className="footer-space"></div>
    </div>
  );
};

export default About;
