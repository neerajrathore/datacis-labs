import { features } from "../constants";

const FeatureSection = () => {
  return (
    <>
    <div className="relative mt-20   ">
      
      <div className="text-center">
            <h2 className="mt-4 text-3xl  text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Services
            </h2>
            <p className="text-lg font-medium text-gray-600 font-pj">
            We have skilled team of professionals to deliver Data & AI services.
        
            </p>
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-9 mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-none transition-all p-6 text-md border h-full"
          >
            <div className="flex items-center gap-2">
              {feature.icon}
              <h6 className="font-bold text-2xl text-gray-700">
                {feature.text}
              </h6>
            </div>
            <p className="mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default FeatureSection;
