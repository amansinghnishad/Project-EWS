import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import IntroAnimation from "./components/animations/IntroAnimation";
import RippleAnimation from "./components/animations/RippleAnimation";
import IntroNavbar from "./components/common/IntroNavbar";
import Lenis from "lenis";
import "./App.css";

function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const [rippleVisible, setRippleVisible] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleIntroComplete = () => {
    setRippleVisible(true);
    setTimeout(() => {
      setIntroVisible(false);
      setRippleVisible(false);
    }, 700);
  };

  const handleSkip = () => {
    setIsSkipping(true);
  };

  return (
    <>
      {introVisible && (
        <>
          <IntroNavbar onSkip={handleSkip} />
          <IntroAnimation
            onComplete={handleIntroComplete}
            isSkipping={isSkipping}
          />
        </>
      )}
      {rippleVisible && <RippleAnimation />}
      {!introVisible && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}
export default App;
