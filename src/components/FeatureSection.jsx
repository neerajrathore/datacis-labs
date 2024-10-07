import { features } from "../constants";

const FeatureSection = () => {
  return (
    <>
    <div className="relative mt-0 bg-[#fff] rounded-3xl py-12 sm:py-16 lg:py-20   ">
      
      <div className="text-center" >
            <h2 className="text-3xl text-[40px] text-[#ff6c2f] sm:text-[40px] xl:text-[70px] font-bold">
            Services
            </h2>
            <p className="text-lg mt-4 font-medium text-gray-600 font-pj">
            We have skilled team of professionals to deliver Data & AI services.
        
            </p>
          </div>

      <div className="grid   py-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-9 mt-5 lg:mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="  rounded-2xl shadow-lg hover:shadow-none transition-all p-6 text-md border h-full"
          >
            <div className="flex items-center gap-2">
              {feature.icon}
              <h6 className="font-bold text-2xl text-gray-700">
                {feature.text}
              </h6>
            </div>
            <p className="mt-4  text-justify text-gray-600  text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default FeatureSection;
