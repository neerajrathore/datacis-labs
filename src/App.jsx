import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
        <Navbar />
          <div className="">
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
          </div>
        <Footer />
    </>
  );
};

export default App;
