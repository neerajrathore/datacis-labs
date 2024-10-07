import { motion } from 'framer-motion';

const HeroSection = () => {

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center h-[70vh] bg-[#111111] text-white">
    {/* Floating Bubbles */}
    

    {/* Hero Text Content */}
    <div className="relative z-10 text-center">
      <h1 className="text-[40px] text-[#ff6c2f] sm:text-[40px] xl:text-[70px] font-bold tracking-wide">
        Data &amp; AI Services
      </h1>
      <p className="mt-10 text-2xl text-neutral-200 font-bold max-w-4xl">
        AI/ ML Platform and Custom Solutions
      </p>
      {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Read More
        </a>
        </div> */}
    </div>
  </div>
  );
};

export default HeroSection;
