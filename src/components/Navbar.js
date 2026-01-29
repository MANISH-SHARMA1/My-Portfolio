import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle smooth scrolling when the page loads with a hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Call on initial load
    handleHashScroll();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full max-w-[95%] sm:max-w-[90%] lg:max-w-5xl left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 rounded-2xl sm:rounded-2xl md:rounded-full border border-[#439DDF]/50 mt-2 sm:mt-4 ${
        isScrolled
          ? "backdrop-blur-md bg-[#0d303e]/30"
          : "bg-[#0d303e]/20 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <HashLink
              smooth
              to="/#manisharma"
              className="text-2xl font-devinaGarden text-white"
            >
              Manish Sharma
            </HashLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-4 lg:space-x-8">
            <Link
                to="/about"
                className="text-lg font-semibold text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                About
              </Link>
              <HashLink
                smooth
                to="/#techStack"
                className="text-lg font-semibold text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                Tech Stack
              </HashLink>
              <HashLink
                to="/#experience"
                className="text-lg font-semibold text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                Experience
              </HashLink>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-cyan-400 text-white text-sm lg:text-base px-4 lg:px-6 py-4 rounded-full hover:bg-white hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-5 w-5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-[400px]"
            : "opacity-0 -translate-y-2 pointer-events-none max-h-0"
        }`}
      >
        <div className="px-3 pt-2 pb-3 space-y-1.5 bg-[#0d303e]/80 text-center backdrop-blur-md rounded-b-2xl">
          <Link
            to="/about"
            className="block px-4 py-2.5 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <HashLink
            smooth
            to="/#techStack"
            className="block px-4 py-2.5 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            Tech Stack
          </HashLink>
          <HashLink
            smooth
            to="/#experience"
            className="block px-4 py-2.5 text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </HashLink>
          <Link
            to="/contact"
            className="block px-4 py-2.5 text-[#f83f5e] text-sm font-medium mt-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
