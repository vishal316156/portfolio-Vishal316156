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


export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <AboutGrid/>
      <FeaturedProject />
      <DsaTracker/>
      <TechMarquee />
      <Contact/>
      <Footer/>
    </>
  );
}