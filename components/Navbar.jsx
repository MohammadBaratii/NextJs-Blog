import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";
import AuthButton from "./AuthButton";

const NAVBAR_BUTTONS = [
  { id: 1, title: "Home", slug: "/" },
  { id: 2, title: "All Posts", slug: "/all-posts" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <header className="sticky top-0 left-0 bg-white/50 shadow-lg backdrop-blur-md z-10">
      <nav className="wrapper py-3 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/">Next.js Blog</Link>
          </h1>
          <button
            className="z-10 sm:hidden"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div>
          <ul
            className={`${
              isNavOpen ? "left-0" : "-left-full"
            } navbar absolute grid place-content-center gap-3 top-0 w-full h-screen bg-cyan-500 text-white transition-[left] duration-300 text-center sm:relative sm:flex sm:items-center sm:left-0 sm:w-full sm:h-fit sm:bg-transparent sm:text-neutral-900 sm:transition-none`}
          >
            {NAVBAR_BUTTONS.map((button) => {
              return (
                <li key={button.slug}>
                  <Link
                    href={button.slug}
                    className="block p-2"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {button.title}
                  </Link>
                </li>
              );
            })}
            <li className="group relative">
              <button className="flex items-center gap-1 p-2">
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div className="absolute hidden top-full right-1/2 translate-x-1/2 group-hover:block sm:right-0 sm:translate-x-0">
                <ul className="grid w-max bg-white p-2 rounded-lg translate-y-2 shadow-[0_0_15px_#444]">
                  {categories.map((category) => {
                    return (
                      <li
                        key={category.slug}
                        className="border-b border-neutral-300 last:border-none"
                      >
                        <Link
                          key={category.slug}
                          href={`/category/${category.slug}`}
                          className="block p-2 text-neutral-900"
                          onClick={() => setIsNavOpen(false)}
                        >
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <AuthButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
