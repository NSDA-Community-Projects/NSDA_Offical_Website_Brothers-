import { useEffect, useState } from "react";
import About from "./sections/About";
import Building from "./sections/Building";
import ContactUs from "./sections/ContactUs";
import RecentEvents from "./sections/Events";
import Home from "./sections/Home";
import HowWeBuilt from "./sections/HowWeBuilt";
import OurLeadersAndUnited from "./sections/OurLeadersAndUnited";
import OurTeam from "./sections/OurTeam";
import SpecialBook from "./sections/SpecialBook";
import UpComingProjects from "./sections/UpComingProjects";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled past 100vh
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black/1 relative">
      <Home />
      <SpecialBook />
      <Building />
      <About />
      <HowWeBuilt />
      <OurLeadersAndUnited />
      <OurTeam />
      <UpComingProjects />
      <RecentEvents />
      <ContactUs />

      {/* Back to Home Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 z-50 right-8 bg-[#020F59]/80 text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#020e59]/90 hover:-translate-y-1.5 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
