"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Work",
      path: "/work",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-primary/20 fixed top-0 left-0 right-0 z-10">
      <div className="navbar lg:w-10/12 mx-auto px-4">
        <div className="navbar-start">
          <a className="lg:text-3xl text-2xl font-medium">
            Rakib <span className="text-primary">Hossen.</span>
          </a>
        </div>
        <div className=" lg:flex"></div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="space-x-9 menu-horizontal px-1">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className={`${
                      pathName === item.path
                        ? "text-secondary font-semibold"
                        : "font-medium"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#E7DCFD] text-[#333333] rounded-box w-52 right-0"
            >
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link className="font-medium" href={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
