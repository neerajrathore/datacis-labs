import React from "react";
import { pricingOptions } from "../../constants";

const ComponentName = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl  text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Solutions
            </h2>
            <p className="text-lg font-medium text-gray-600 font-pj">
            Our custom solutions are built on platforms from industry leading OEMs.
            </p>
          </div>

        

          <div className="relative mt-10 md:mt-24 md:order-2">
            {/* <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div> */}
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {pricingOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 rounded-lg bg-white lg:py-8 lg:px-7">
                    <div className="flex items-center mt-8">
                      {/* <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                      /> */}
                      <div className="ml-0">
                        <p className=" text-3xl font-bold text-gray-900 font-pj">
                          {option.title}
                        </p>
                        {/* <p className="mt-0.5 text-sm font-pj text-gray-600">
                          Freelance React Developer
                        </p> */}
                      </div>
                    </div>
                    <div className="flex-1">
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {option.discription}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentName;
