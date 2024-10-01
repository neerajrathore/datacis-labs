import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import './App.css'

const App = () => {
  
  return (
    <>
        <Navbar />
          <div className="">
            <HeroSection />
            <FeatureSection />
            <Testimonials />
            {/* <Workflow /> */}
            <Pricing />
          </div>
        <Footer />
    </>
  );
};

export default App;
