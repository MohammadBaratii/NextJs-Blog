import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";

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
    <header className="sticky top-0 left-0 bg-white/50 backdrop-blur-md z-10">
      <nav className="wrapper p-5 sm:flex sm:justify-between sm:items-center sm:gap-7">
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
                className="w-6 h-6"
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
                className="w-6 h-6"
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
            className={`navbar absolute grid place-content-center gap-5 top-0 ${
              isNavOpen ? "left-0" : "-left-full"
            } w-full h-screen text-neutral-100 !duration-300 sm:relative sm:flex sm:justify-between sm:left-0 sm:w-full sm:h-fit sm:text-neutral-900 sm:backdrop-blur-0`}
            style={{}}
          >
            {NAVBAR_BUTTONS.map((button) => {
              return (
                <li key={button.slug}>
                  <Link href={button.slug}>
                    <a
                      className="block rounded-md text-center transition hover:bg-dark-1"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {button.title}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="group relative">
              <button className="flex items-center gap-1">
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
              <div className="absolute hidden top-full right-0 w-max bg-white p-2 rounded-md shadow-[0_0_15px_#444] group-hover:grid">
                {categories.map((category) => {
                  return (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                    >
                      <a className="p-2 border-b border-neutral-300 last:border-none">
                        {category.name}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
