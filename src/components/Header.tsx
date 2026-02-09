import { NAV_ROUTES } from "../utils/constants";
import { BrandName } from "./BrandName";

export const Header = () => {
  return (
    <nav className="flex flex-wrap gap-4 justify-center h-auto mb-8 md:mb-12 items-center">
      <BrandName />
      <ul className="flex text-peach gap-4 md:gap-8 justify-center text-lg md:text-2xl flex-wrap">
        {NAV_ROUTES.map((navRoute) => (
          <li
            key={navRoute}
            className="border-t border-b border-dotted border-amber-400 px-4 md:w-56 flex justify-center items-center cursor-pointer text-center py-2 md:py-6"
          >
            <a href={`#${navRoute.toLowerCase().replace(/\ /g, "")}`}>
              <span>{navRoute}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
