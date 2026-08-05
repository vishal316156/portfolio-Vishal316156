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
  const hasStats = stats !== null;
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
      
      {hasStats ? ( <Stats stats={stats} /> ) : (
          <section className="section">
            <p className="text-zinc-400 text-center">
              <section className="section">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="glass skeleton h-36 rounded-3xl"
                    />
                  ))}
                </div>
              </section>
            </p>
          </section>
        )}
      <AboutGrid />
      <FeaturedProject />

      {hasStats ? ( <DsaTracker stats={stats} />  ) : (
        <section id="dsa" className="section">
          <p className="text-zinc-400 text-center">
            <section id="dsa" className="section">
              <h2 className="text-5xl font-black mb-12">
                Problem Solving & Competitive Programming
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="glass skeleton h-[380px] rounded-3xl"
                  />
                ))}
              </div>
            </section>
          </p>
        </section>
       )}
      <TechMarquee />
      <Contact />
      <Footer />
    </>
  );
}