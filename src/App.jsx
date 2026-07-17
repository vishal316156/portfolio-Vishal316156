import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import AboutGrid from "./components/grid/AboutGrid.jsx";
import FeaturedProject from "./components/featured/FeaturedProject";
import DsaTracker from "./components/dsa/DsaTracker";
import TechMarquee from "./components/marquee/TechMarquee.jsx";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";
import axios from "axios";



export default function App() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
  axios
    .get("http://localhost:5000/api/profile-stats")
    .then((res) => setStats(res.data))
    .catch((err) => console.error(err));
}, []);


  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats stats={stats} />
      <AboutGrid/>
      <FeaturedProject />
      <DsaTracker stats={stats} />
      <TechMarquee />
      <Contact/>
      <Footer/>
    </>
  );
}