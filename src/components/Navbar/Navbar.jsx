import React, { useEffect, useState } from "react";
import logo from "../../assets/images/hmlogo.png";
import { navlink } from "../../utils/Data"; 
import { Link, NavLink, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavMenu";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigation = useNavigate();
  const [toggle, setToggle] = useState(false);

  // Function to determine the scroll section
  const scrollToSection = (itemName) => {
    if (itemName === "service") {
      // If the "service" link is clicked, navigate directly to the service page
      navigation("/services");
      setActiveLink("service");
    } else {
      // Scroll to the section
      const element = document.getElementById(itemName);
      if (element) {
        const marginTop = 5 * 14;
        const scrollToY =
          element.getBoundingClientRect().top + window.scrollY - marginTop;
        window.scrollTo({ top: scrollToY, behavior: "smooth" });
      }
    }
  };

  // To determine the active section while scrolling
  const activeSection = () => {
    for (let i = navlink.length - 1; i >= 0; i--) {
      const section = document.getElementById(navlink[i].name);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(navlink[i].name);
          break;
        }
      }
    }
  };

  // Toggling navbar
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Setting the active link styles
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2.1px solid #faa916" : "",
      paddingBottom: isActive ? "3px" : "",
    };
  };

  // Quote routing
  const routeQuote = () => {
    navigation(`/quote`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      activeSection(); // Track active section while scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen h-[5rem] z-50 bg-[#f7f4f3] fixed ${
        isScrolled ? "scrolled-navbar-class" : ""
      }`}
    >
      <div className="w-[90vw] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center">
          {/* Menu bar */}
          <div
            onClick={handleToggle}
            className="xs:block md:hidden bg-green-20/50 cursor-pointer p-1.5 rounded-md ring-1 ring-[#faa916] mr-2"
          >
            {toggle ? (
              <div className="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#02362D"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#02362D"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          {/* End Menu bar */}
          <div className="w-20 lg:w-28 p-2 z-30">
            <Link to={`/`}>
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <ul className="hidden lg:flex justify-between items-center gap-6">
          {navlink.map((item) => (
            <li
              key={item.id}
              className="text-[0.9rem] font-medium capitalize"
              onClick={() => scrollToSection(item.name)}
            >
              <NavLink
                className={`group duration-0 ${
                  activeLink === item.name
                    ? "border-b-[2.1px] border-[#faa916] pb-[3px] transition duration-200"
                    : ""
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={routeQuote}
            className="bg-blue-700 text-white text-[0.7rem] lg:text-sm font-medium py-2.5 px-6 rounded-md"
          >
            Get Quote
          </button>
        </div>
      </div>
      <div>
        {toggle && (
          <MobileNavbar setToggle={setToggle} scroll={scrollToSection} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
