import { NAME } from "../utils/constants";

import { HashLink } from "react-router-hash-link";

type BrandNameProps = {
  className?: string;
};

export const BrandName = (props: BrandNameProps) => (
  <h1
    className={`text-black drop-shadow-[0_0px_6px_rgba(0,0,0,1)] drop-shadow-lightorange/85 text-6xl lg:text-8xl -rotate-6 font-petit ${props.className ?? ''}`}
  >
    <HashLink smooth to="/#top">{NAME.toLowerCase()}</HashLink>
  </h1>
);
