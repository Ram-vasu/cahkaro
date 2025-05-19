import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#666] w-full pt-16 pb-6 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-center text-white">
        {/* Left: Links */}
        <div className="w-full md:w-3/4 flex flex-wrap justify-center md:justify-start gap-y-10 gap-x-24 mb-10 md:mb-0">
          {/* About CashKaro */}
          <div>
            <h3 className="font-semibold text-lg mb-3">About CashKaro</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          {/* Useful Reads */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Useful Reads</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy & Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anti-Spam Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Special Pages */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Special Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Refer and Earn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Become our Partner
                </a>
              </li>
            </ul>
          </div>
          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right: Social & App */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Let's Get Social</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M17 2.1h-3.2C9.6 2.1 8 3.7 8 6.2v2.1H5.5a.5.5 0 00-.5.5v3.1c0 .3.2.5.5.5H8v8.1c0 .3.2.5.5.5h3.2c.3 0 .5-.2.5-.5v-8.1h2.2c.3 0 .5-.2.5-.5l.1-3.1a.5.5 0 00-.5-.5h-2.3V6.2c0-.5.1-.7.7-.7h1.6c.3 0 .5-.2.5-.5V2.6c0-.3-.2-.5-.5-.5z"
                    fill="#222"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M17.53 6.47a.75.75 0 00-1.06 0L12 10.94 7.53 6.47a.75.75 0 10-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 101.06 1.06L12 13.06l4.47 4.47a.75.75 0 101.06-1.06L13.06 12l4.47-4.47a.75.75 0 000-1.06z"
                    fill="#222"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="#222"
                    strokeWidth="2"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    stroke="#222"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#222" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="4"
                    stroke="#222"
                    strokeWidth="2"
                  />
                  <path d="M10 9.5v5l5-2.5-5-2.5z" fill="#222" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="#222"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 10v6M7 7v.01M12 10v6m0-6c0-1.1.9-2 2-2s2 .9 2 2v6"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Download App</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Google Play">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" aria-label="App Store">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white text-base mt-12 opacity-90">
        (©) Copyright 2025 CashKaro. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
