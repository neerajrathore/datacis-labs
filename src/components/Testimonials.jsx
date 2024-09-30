import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <div className="items-center text-center py-5">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-5 lg:my-10">
          Technologiess
        </h2>
        <div className=" w-full items- justify-center max-w-2xl m-auto">
          <p className="text-2xl sm:text-5xl lg:text-3xl mt-10 lg:mt-20 tracking-wide">
          Our products and solutions are based on open-source technologies.
          </p>
        </div>
      </div>
      <div className="flex py-10 flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full  m-auto  px-32  sm:w-1/2 lg:w-1/2  py-2"
          >
            <div className="bg-white  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md p-6 text-md border  ">
              <div className="flex  items-center">
                <img
                  className="w-auto h-12 mr-6 "
                  src={testimonial.image}
                  alt=""
                />
                  <h6 className="font-bold text-gray-700">{testimonial.user}</h6>
               
              </div>
              <p className="mt-4">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
