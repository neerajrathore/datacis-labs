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
      <div className="mt-20 tracking-wide px-4 md:px-8 lg:px-32 bg-gray-50 py-10">
        <div className="text-center">
            <h2 className="mt-4 text-3xl  text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Technologies
            </h2>
            <p className="text-lg font-medium text-gray-600 font-pj">
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
                  <div className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md p-6 text-md border h-full">
                    <div className="flex flex-col items-center p-6">
                      <div className="flex items-center gap-4 w-full">
                        <img
                          className="h-8  object-cover "
                          src={testimonial.image}
                          alt={`${testimonial.user} profile`}
                        />
                        <h6 className="font-bold text-gray-700 text-md">
                          {testimonial.user}
                        </h6>
                      </div>
                      <p className="mt-4  text-justify text-lg">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={prevTestimonial}
            >
              <span className="sr-only">Previous testimonial</span>
              &#8592;
            </button>
            <button
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
