import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-black px-5 lg:px-12 ">
      <div className="my-container">
        <nav className="flex justify-between items-center py-5 text-white">
          <div>
            <h1 className="text-3xl font-bol">Portfolio</h1>
          </div>
          <ul
            className={`md:flex z-50 absolute w-full bg-black text-white md:w-auto md:bg-none md:static duration-500 pt-2 pl-[14px] md:pl-0 pb-3 md:pb-0 lg:pt-0 left-0 md:left-auto ${
              isOpen ? "top-[75px]" : "-top-48"
            }`}
          >
            <li className="pl-2 md:mx-5 text-base font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li className="pl-2 md:mx-5 text-base font-semibold ">
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li className="pl-2 md:mx-5 text-base font-semibold ">
              <NavLink to="/skill">Skill</NavLink>
            </li>
            <li className="pl-2 md:mx-5 text-base font-semibold ">
              <NavLink to="/blog">Project</NavLink>
            </li>
            <li className="pl-2 md:mx-5 text-base font-semibold">
              <NavLink to="/blog">Contact Us</NavLink>
            </li>
          </ul>
          <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <span>
              {isOpen === true ? (
                <BsXLg className="h-6 w-6 text-blue-500" />
              ) : (
                <FaBars className="h-6 w-6 text-blue-500" />
              )}
            </span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
