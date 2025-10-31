import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import CategoryCarousel from "./CategoryCarousel";

const HeroSection = () => {
    return (
        <section className="text-center py-12 md:py-6 px-4 bg-gradient-to-b from-gray-100  to-[#6c3ac225]">
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                {/* Tagline */}
                <span className="px-5 py-2 mx-auto rounded-full bg-gray-100 text-[#F83002] font-semibold text-sm tracking-wide shadow-sm">
                    No. 1 Job Hunt Website
                </span>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                    Search, Apply & <br />
                    Get Your{" "}
                    <span className="text-[#6c3ac2] relative">
                        Dream Jobs
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#6A38C2]/30 rounded-full"></span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe
                    optio unde inventore exercitationem?
                </p>

                {/* Search bar */}
                <div className="flex w-full md:w-[45%] bg-white shadow-md border border-gray-200 rounded-full items-center pl-4 mx-auto transition-all duration-300 focus-within:shadow-lg">
                    <input
                        type="text"
                        placeholder="Find your dream job"
                        className="w-full py-3 px-2 text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                    />
                    <Button className="rounded-r-full bg-[#6A38C2] hover:bg-[#5c2dac] transition-colors duration-200">
                        <Search className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
            <CategoryCarousel/>
        </section>
    );
};

export default HeroSection;
