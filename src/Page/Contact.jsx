import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          VAST solution engineers are here to help explore what's possible.
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="mb-6">
              VAST Data has re-invented scale-out data infrastructure with an
              entirely new system architecture designed for the future. Meet
              with VAST and come away with all of your questions answered,
              including a customized cost breakdown of software, support,
              maintenance, expansion & more. Here are some of the ways we will
              help you explore what's possible with VAST.
            </p>
            <div className="space-y-6">
              <div className=" bg-opacity-30  rounded-lg">
                <h2 className="text-xl font-bold mb-2">
                  Review your current infrastructure.
                </h2>
                <p>
                  Understanding the required capabilities as it relates to your
                  application is the first step.
                </p>
              </div>
              <div className=" bg-opacity-30  rounded-lg">
                <h2 className="text-xl font-bold mb-2">
                  Design For the Future.
                </h2>
                <p>
                  Let us show you how to future proof your applications so you
                  can make and leverage the AI and Big data tools you love,
                  without limits.
                </p>
              </div>
              <div className=" bg-opacity-30  rounded-lg">
                <h2 className="text-xl font-bold mb-2">
                  Find out how much you can save.
                </h2>
                <p>
                  Size up your data sets to determine whether VAST's all-new
                  similarity-based data reduction can provide additional
                  savings.
                </p>
              </div>
              <div className=" bg-opacity-30  rounded-lg">
                <h2 className="text-xl font-bold mb-2">
                  See how VAST stacks up.
                </h2>
                <p>
                  We will provide documentation on how VAST Data Platform
                  compares side by side to leading vendors. Review by
                  performance, scalability, longevity, and price.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Schedule Time with VAST</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium">
                  Company *
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company"
                  className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Business Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Business Email"
                  className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Business Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Business Phone"
                  className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="country" className="block text-sm font-medium">
                  Select Country/Region *
                </label>
                <select
                  id="country"
                  className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                >
                  <option value="">Select Country/Region</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="comments" className="block text-sm font-medium">
                  Comments
                </label>
                <textarea
                  id="comments"
                  placeholder="Comments"
                  className="w-full px-3 py-2 bg-[#111] border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white h-24"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#111] py-2 px-4 rounded-md font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                Demo
              </button>
            </form>
            <p className="text-sm mt-4">
              By proceeding you agree to the VAST Data Privacy Policy, and you
              consent to receive marketing communications. *Required field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
