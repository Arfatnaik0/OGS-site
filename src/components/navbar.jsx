import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Watches", path: "/watches" },
    { name: "Kicks", path: "/kicks" }
  ];

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="sticky top-3 z-50">
      {/* <nav className="w-[90dvw] h-[10dvh] bg-white m-auto mt-4 rounded-xl flex items-center justify-between"> */}
      <nav
      className={`w-[90dvw] h-[10dvh] bg-white m-auto mt-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
      scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : ""
      }`}>
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="h-[70%] ml-3 md:ml-20 md:h-[100%]"
        />
        <div className="w-1/2 hidden md:flex justify-end mr-10">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`mx-10 text-2xl transition-all duration-200 border-b-2 ${
                location.pathname === path
                  ? "border-black"
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex mr-5">
          <button onClick={toggleNavbar}>
            <img src="/Images/hg.svg" alt="Menu" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute right-6 m-auto mt-2 mb-2 py-1 rounded-3xl bg-white shadow-md z-40">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-2 text-2xl ${
                location.pathname === path
                  ? " border-black"
                  : " hover:border-gray-400"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
