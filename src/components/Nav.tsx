import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/images/logo-text.png";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav className="relative flex items-center justify-between px-4 py-3 sm:container sm:mx-auto">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl sm:hidden"
        >
          <FiMenu />
        </button>
        <img
          src={Logo}
          alt="Dev Stack Logo"
          className="absolute left-1/2 h-6 w-auto -translate-x-1/2 object-contain sm:static sm:h-8 sm:translate-x-0"
        />
        <ul className="hidden items-center gap-7 font-medium sm:flex">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex shrink-0 gap-2">
          <button className="text-xs font-medium sm:text-base">Sign In</button>
          <button className="rounded-3xl bg-[#D91B7E] px-3 py-2 text-xs font-medium text-white sm:px-4 sm:py-2.5 sm:text-base">
            Sign Up
          </button>
        </div>
      </nav>
      <hr className="border-t border-gray-100" />
    </div>
  );
};

export default Nav;
