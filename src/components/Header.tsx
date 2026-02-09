import { NAV_ROUTES } from "../utils/constants";
import { BrandName } from "./BrandName";

export const Header = () => {
  return (
    <nav className="flex justify-center h-20 mb-12">
      <BrandName />
      <ul className="flex text-peach w-full justify-evenly text-2xl">
        {NAV_ROUTES.map((navRoute) => (
          <li className="border-t border-b border-dotted border-amber-400 w-56 flex justify-center items-center cursor-pointer text-center">
            <a href={`#${navRoute.toLowerCase().replace(/\ /g, "")}`}>
              <span>{navRoute}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
