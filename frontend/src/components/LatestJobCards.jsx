import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Briefcase, MapPin } from "lucide-react";

const LatestJobCards = () => {
  return (
    <div className="group relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Header: Logo + Company Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
          alt="Company Logo"
          className="w-14 h-14 rounded-xl border border-gray-100 object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg text-gray-900">Company Name</h2>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin size={14} />
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Job Title + Description */}
      <div className="mb-5">
        <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
          <Briefcase size={18} className="text-purple-600" />
          Frontend Developer
        </h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          We’re looking for a talented frontend developer skilled in React and
          modern UI frameworks. Join our fast-paced, design-focused team.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary" className="text-blue-700 bg-blue-100">
          12 Positions
        </Badge>
        <Badge variant="secondary" className="text-[#F83002] bg-red-100">
          Part Time
        </Badge>
        <Badge variant="secondary" className="text-[#7209b7] bg-purple-100">
          24 LPA
        </Badge>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md">
          Apply Now
        </Button>
      </div>

      {/* Hover Accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-b-2xl" />
    </div>
  );
};

export default LatestJobCards;
