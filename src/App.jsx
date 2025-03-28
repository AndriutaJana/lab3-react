import { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Jobs from "./Jobs/Jobs";
import About from "./About/About";
import Contact from "./Contact/Contact";
import RecentJobs from "./RecentJobs/RecentJobs";
import Category from "./Category/Category";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return (
    <>
      <Navbar navigate={navigate} />
      {route === "/" && (
        <>
          <Hero />
          <RecentJobs />
          <Category />
        </>
      )}
      {route === "/jobs" && <Jobs />}
      {route === "/about-us" && <About />}
      {route === "/contact-us" && <Contact />}
      <Footer />
    </>
  );
}

export default App;
