import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section - Logo & Text */}
        <div className="text-center md:text-left group">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span className="text-gray-900 group-hover:text-[#6A38C2] transition-colors duration-300">
                Job
              </span>
              <span className="text-[#F83002] group-hover:text-[#F84A1A] transition-colors duration-300">
                Portal
              </span>
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-[#6A38C2] transition-colors">
            About
          </a>
          <a href="/jobs" className="hover:text-[#6A38C2] transition-colors">
            Jobs
          </a>
          <a href="/" className="hover:text-[#6A38C2] transition-colors">
            Contact
          </a>
          <a href="/" className="hover:text-[#6A38C2] transition-colors">
            Privacy
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex justify-center md:justify-end space-x-5">
          {[
            {
              href: "https://facebook.com",
              label: "Facebook",
              path: "M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z",
            },
            {
              href: "https://twitter.com",
              label: "Twitter",
              path: "M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z",
            },
            {
              href: "https://linkedin.com",
              label: "LinkedIn",
              path: "M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z",
            },
          ].map((icon) => (
            <a
              key={icon.label}
              href={icon.href}
              aria-label={icon.label}
              className="text-gray-500 hover:text-[#6A38C2] transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
