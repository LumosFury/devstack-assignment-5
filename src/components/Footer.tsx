import Logo from "../assets/images/logo-text.png";
const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="container mx-auto  bg-white border-t border-gray-100 font-sans pt-16 pb-12">
        <div className="max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 border-b border-gray-100 pb-12 lg:grid-cols-12">
            <div className="col-span-5 pr-8">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src={Logo}
                  alt="DevStack Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
              <ul className="flex items-center gap-5 text-sm font-semibold text-slate-800">
                <a href="" className="hover:text-slate-600 transition-colors">
                  GitHub
                </a>
                <a href="" className="hover:text-slate-600 transition-colors">
                  Twitter
                </a>
                <a href="" className="hover:text-slate-600 transition-colors">
                  LinkedIn
                </a>
              </ul>
            </div>
            <div className="col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                  Product
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-400">
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                  Company
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-400">
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                  Legal
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-400">
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-slate-600 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 flex items-center justify-between text-sm text-slate-400">
            <p>&copy; 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="" className="hover:text-slate-600 transition-colors">
                Privacy
              </a>
              <a href="" className="hover:text-slate-600 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
