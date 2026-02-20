import { NAV_ROUTES } from "../utils/constants";
import { BrandName } from "./BrandName";

import { HashLink } from "react-router-hash-link";

type HeaderProps = {
  className?: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <nav
      className={`flex flex-wrap gap-4 justify-center h-auto md:mb-6 lg:mb-12 items-center ${props.className ?? ""}`}
    >
      <BrandName />
      <ul className="flex text-peach gap-4 md:gap-4 lg:gap-8 justify-center text-lg md:text-xl lg:text-2xl flex-wrap md:flex-nowrap z-10">
        {NAV_ROUTES.map((navRoute) => (
          <li
            key={navRoute.headerName}
            className="border-t border-b border-dotted border-amber-400 basis-full px-4 min-w-24 md:w-48 lg:w-56 flex justify-center items-center cursor-pointer text-center py-2 md:py-4 lg:py-6 bg-[rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            {navRoute.path && (
              <HashLink smooth to={navRoute.path} className="hover:scale-110 transition">
                <span>{navRoute.headerName}</span>
              </HashLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
