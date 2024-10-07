import { useState } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="mt-20 tracking-wide px-4 md:px-8 lg:px-32  py-10">
        <div className="text-center">
            <h2 className="mt-4 text-3xl text-[40px] text-[#ff6c2f] sm:text-[40px] xl:text-[70px] font-bold">
            Technologies
            </h2>
            <p className="text-lg font-medium mt-7 text-gray-300 font-pj">
            Our products and solutions are based on open-source technologies.
           
            </p>
          </div>

        <div className="relative max-w-7xl mt-10 md:mt-24 md:order-2 mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-3xl p-6 text-md border h-full">
                    <div className="flex flex-col items-center p-6">
                      <div className="flex flex-col items-center gap-4 w-full">
                        <img
                          className="h-8  object-cover "
                          src={testimonial.image}
                          alt={`${testimonial.user} profile`}
                        />
                        <h6 className="font-bold text-2xl text-gray-700">
                          {testimonial.user}
                        </h6>
                      </div>
                      <p className="mt-4  text-justify text-gray-600  text-lg">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2 mr-4">
            <button
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-[#FF6C2F] bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
              onClick={prevTestimonial}
            >
              <span className="sr-only">Previous testimonial</span>
              &#8592;
            </button>
            <button
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-[#FF6C2F] bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
              onClick={nextTestimonial}
            >
              <span className="sr-only">Next testimonial</span>
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
