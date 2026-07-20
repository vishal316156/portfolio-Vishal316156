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
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/profile-stats`
        );

        setStats(res.data);
        if (res.data.refreshing) {
          setTimeout(fetchStats, 5000);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
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