import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";
import Loading from "./Loading";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="grid gap-2 p-5 bg-white rounded-xl">
      <p className="text-lg font-bold">Categories</p>
      <hr className="border border-neutral-300" />
      {!categories.length && <Loading classes="w-8 h-8" container />}
      <ul className="grid">
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className="block p-2 rounded-lg transition hover:bg-indigo-200"
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
