import Logo from "../assets/images/logo-text.png";
const Nav = () => {
  return (
    <>
      <nav className="flex justify-between container mx-auto py-3">
        <img
          src={Logo}
          alt="Dev Stack Logo"
          className="w-auto object-contain"
        />
        <ul className="flex gap-7 items-center font-medium">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-6">
          <button className="font-medium">Sign In</button>
          <button className="rounded-3xl bg-[#D91B7E] px-4 py-2.5 font-medium text-white">
            Sign Up
          </button>
        </div>
      </nav>
      <hr className="border-t border-gray-600" />
    </>
  );
};

export default Nav;
