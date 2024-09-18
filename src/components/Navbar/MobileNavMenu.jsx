import React from "react";
import { NavLink } from "react-router-dom";
import { navlink } from "../../utils/Data";

const MobileNavbar = ({ setToggle, scroll }) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      // color: isActive ? "#faa916" : "",
      //   borderBottom: isActive ? "2.1px solid #7CCCBE" : "",
      //   paddingBottom: isActive ? "4px" : "",
    };
  };
  return (
    <div className="block md:hidden w-screen h-[calc(100vh-5rem)] fixed left-0 transition duration-200 z-30">
      <div className="flex justify-between">
        <div className="w-2/3 h-screen bg-[#f7f4f3] px-6 pt-6">
          <ul className="flex text-[#011936] flex-col gap-4 ">
            {navlink.map((item) => (
              <li
                key={item.id}
                className=" w-max text-[1.5rem] text-[#011936] font-extrabold active:text-[#faa916] capitalize"
                onClick={() => {
                  scroll(item);
                }}
              >
                <NavLink
                  onClick={() => {
                    setToggle(false);
                  }}
                  style={navLinkStyles}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => {
            setToggle(false);
          }}
          className="w-1/3 h-screen bg-slate-700/70 text-white backdrop-blur-sm"
        ></div>
      </div>
    </div>
  );
};

export default MobileNavbar;
