import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <section className="max-w-7xl mx-auto my-8 px-4 ">
      {/* Section Title */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          <span className="text-[#6A38C2]">Latest & Top </span>
          Job Openings
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Explore the most recent and high-demand positions tailored for you.
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>
    </section>
  );
};

export default LatestJobs;
