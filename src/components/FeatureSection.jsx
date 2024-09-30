import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] ">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-5 lg:my-10">
          Services
        </h2>
        <div className=" w-full items-center justify-center max-w-2xl m-auto">
          <p className="text-2xl sm:text-5xl lg:text-3xl my-3 tracking-wide">
            We have skilled team of professionals to deliver Data & AI services.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap px-9 mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full  m-auto  px-8  sm:w-1/2 lg:w-1/3  "
          >
            <div className="bg-white   rounded-2xl shadow-lg hover:shadow-none transition-all p-6 text-md border  ">
              <div className="flex  items-center gap-2">
                {feature.icon}
                <h6 className="font-bold text-2xl text-gray-700">{feature.text}</h6>
              </div>
              <p className="mt-4">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
