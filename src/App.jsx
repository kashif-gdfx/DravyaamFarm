import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Home */}
      <div id="home">
        <Hero />
      </div>

      {/* About */}
      <div id="about">
        <FeaturesSection />
      </div>

      {/* Location */}
      <div id="location">
        <Location />
      </div>

      {/* Gallery */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>


      <Footer />
    </>
  );
}
