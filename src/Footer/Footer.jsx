import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-heading">
            <BusinessCenterIcon className="job-icon" />
            <span>Job</span>
          </div>
          <div className="job-description">
            IT jobs for every level of experience
            <br />
            Find your place in the world of technology
            <br />
            The road to a digital future starts here
            <br />
            Be one step closer to your dream IT job
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-heading">Company</div>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Our team</li>
            <li>Partners</li>
            <li>For Employees</li>
            <li>For Candidates</li>
          </ul>
        </div>

        <div className="footer-column">
          <div className="footer-heading">Category</div>
          <ul className="footer-links">
            <li>Software Development</li>
            <li>DevOps & Automation</li>
            <li>Cybersecurity</li>
            <li>Machine Learning</li>
            <li>Database Management</li>
          </ul>
        </div>

        <div className="footer-column newsletter-column">
          <div className="footer-heading">Newsletter</div>
          <p className="newsletter-text">
            Subscribe for the latest IT opportunities!
          </p>
          <div className="email-input">
            <input type="email" placeholder="Email Address" />
          </div>
          <button className="subscribe-button">Subscribe now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © Copyright Tech Hire 2024. Designed by Andritta Jana
        </div>
        <div className="legal-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
