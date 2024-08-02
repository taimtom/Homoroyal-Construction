import React from "react";
import { NavLink } from "react-router-dom";
import { navlink } from "../../utils/Data";

const MobileNavbar = ({ setToggle }) => {
  const navLinkStyles = ({ isActive }) => {
    return {
    //   color: isActive ? "#ffffff" : "",
    //   borderBottom: isActive ? "2.1px solid #7CCCBE" : "",
    //   paddingBottom: isActive ? "4px" : "",
    };
  };
  return (
    <div className="block md:hidden w-screen h-[calc(100vh-5rem)] fixed left-0 transition duration-200 z-30">
      <div className="flex justify-between">
        <div className="w-2/3 h-screen bg-[#e9f1f7] px-6 pt-6">
          <ul className="flex text-[#011936] flex-col gap-4 ">
            {navlink.map((item) => (
              <li
                key={item.id}
                className=" w-max text-[1.8rem] text-[#011936] font-extrabold capitalize"
              >
                <NavLink
                  onClick={() => {
                    setToggle(false);
                  }}
                  style={navLinkStyles}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => {
            setToggle(false);
          }}
          className="w-1/3 h-screen bg-slate-700/70 text-white"
        ></div>
      </div>
    </div>
  );
};

export default MobileNavbar;
