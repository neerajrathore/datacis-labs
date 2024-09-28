import { motion } from 'framer-motion';

const HeroSection = () => {

  const bubbleAnimation = {
    animate: {
      y: [0, -50, 50, 0], // Moving up and down
      x: [0, 50, -50, 0], // Moving left and right
    },
    transition: {
      duration: 10, // Duration for the entire animation cycle
      ease: "easeInOut",
      repeat: Infinity, // Infinite repeat for continuous animation
    },
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center h-[45vh] bg-black text-white">
    {/* Floating Bubbles */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(18, 113, 255, 0.6) 0%, rgba(18, 113, 255, 0) 70%)",
      }}
      {...bubbleAnimation}
      whileHover={{ scale: 1.2, rotate: 360 }} // Hover effect
    />

    <motion.div
      className="absolute top-10 right-10 w-96 h-96 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(221, 74, 255, 0.6) 0%, rgba(221, 74, 255, 0) 70%)",
      }}
      {...bubbleAnimation}
      whileHover={{ scale: 1.2, rotate: -360 }} // Hover effect
    />

    <motion.div
      className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(100, 220, 255, 0.6) 0%, rgba(100, 220, 255, 0) 70%)",
      }}
      {...bubbleAnimation}
      whileHover={{ scale: 1.2, rotate: 180 }} // Hover effect
    />

    <motion.div
      className="absolute bottom-10 right-20 w-72 h-72 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(200, 50, 50, 0.6) 0%, rgba(200, 50, 50, 0) 70%)",
      }}
      {...bubbleAnimation}
      whileHover={{ scale: 1.2, rotate: 90 }} // Hover effect
    />

    {/* Hero Text Content */}
    <div className="relative z-10 text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
        Data &amp; AI Services
      </h1>
      <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
        AI/ ML Platform and Custom Solutions
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
