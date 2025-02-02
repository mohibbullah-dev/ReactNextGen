import React from "react";
import Container from "../conponents/Container";
import Flex from "../conponents/Flex";
import logo from "../assets/images/logo.png";
import Buttons from "../conponents/Buttons";
import { NavLink, Link } from "react-router";

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
  return (
    <nav className="py-10">
      <Container>
        <Flex classname="justify-between items-center cursor-pointer">
          <div>
            <img src={logo} />
          </div>
          <menu>
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
            <Flex classname="gap-4">
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
