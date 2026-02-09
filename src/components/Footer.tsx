import { BrandName } from "./BrandName";

import bunny from "../assets/images/bunny.png";
import tiger from "../assets/images/tiger.png";

export const Footer = () => (
  <footer>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-24">
      <img src={bunny} className="w-24 md:w-48"/>
      <BrandName className="text-4xl md:text-9xl"/>
      <img src={tiger} className="w-24 md:w-48 rotate-10"/>
    </div>
    <p className="text-center font-motor text-sm md:text-xl m-8 md:m-16">© 2025 Copyright tea joint inc., All Rights Reserved.</p>
  </footer>
);
