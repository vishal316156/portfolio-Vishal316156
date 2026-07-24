import ScrollProgress from "./components/layout/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import AboutGrid from "./components/grid/AboutGrid";
import FeaturedProject from "./components/featured/FeaturedProject";
import DsaTracker from "./components/dsa/DsaTracker";
import TechMarquee from "./components/marquee/TechMarquee";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function App() {
  const [stats, setStats] = useState(null);
  const pollRef = useRef(null);
  const fetchingRef = useRef(false);

  useEffect(() => {
    const fetchStats = async () => {
  if (fetchingRef.current) return;
  fetchingRef.current = true;

  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/profile-stats`
    );

    setStats(data);

    if (data.refreshing) {
      if (!pollRef.current) {
        pollRef.current = setInterval(fetchStats, 1000);
      }
    } else {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    }
  } catch (err) {
    console.error(err);

    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  } finally {
    fetchingRef.current = false;
  }
};
    fetchStats();
    return () => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
      fetchingRef.current = false;
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats stats={stats} />
      <AboutGrid />
      <FeaturedProject />
      <DsaTracker stats={stats} />
      <TechMarquee />
      <Contact />
      <Footer />
    </>
  );
}