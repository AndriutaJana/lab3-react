import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import "./index.css";
import Navbar from "./NavBar/NavBar";
import RecentJobs from "./RecentJobs.jsx/RecentJobs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentJobs />
      <Category />
      <Footer />
    </>
  );
}

export default App;
