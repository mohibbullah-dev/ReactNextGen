import React, { useState } from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import logo from "../assets/images/logo.png";
import Buttons from "../conponents/Buttons";
import { NavLink, Link } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

// variable starts here
let menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "MarketPlace",
    link: "/marketplace",
  },
  {
    name: "Artist",
    link: "/artist",
  },
  {
    name: "Community",
    link: "/community",
  },
];

const Navbar = () => {
  const [navshow, setNaveshow] = useState(false);

  const NavshowHandle = () => {
    setNaveshow(!navshow);
  };

  return (
    <nav className="py-10">
      <Container>
        <Flex classname="justify-between items-center cursor-pointer">
          <div>
            <img src={logo} />
          </div>

          <div
            className="transform translate-x-[70px] lg:hidden"
            onClick={NavshowHandle}
          >
            {navshow ? (
              <RxCross2 className="text-3xl text-white" />
            ) : (
              <IoMdMenu className="text-3xl text-white" />
            )}
          </div>

          {navshow && (
            <menu className="absolute transform translate-x-40 translate-y-55 border border-white z-50 rounded-lg">
              <ul className="flex gap-6 text-white flex-col px-4 py-4">
                {menu.map((item) => (
                  <li key={item.name} className="">
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "activNavItem" : "navItem"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Flex classname="gap-4 flex flex-col lg:hidden mt-7 ml-4 mr-4">
                <Buttons classname="" text="Login" />

                <Buttons classname="" text="Sign Up" bgShow={false} />
              </Flex>
            </menu>
          )}

          <menu className="hidden lg:block">
            <ul className="flex gap-14 text-white">
              {menu.map((item) => (
                <li key={item.name} className="">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "activNavItem" : "navItem"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </menu>

          <div>
            <Flex classname="gap-4 hidden lg:flex">
              <Buttons classname="" text="Login" />

              <Buttons classname="" text="Sign Up" bgShow={false} />
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
