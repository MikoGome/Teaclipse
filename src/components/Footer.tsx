import { BrandName } from "./BrandName";

import bunny from "../assets/images/bunny.png";
import tiger from "../assets/images/tiger.png";

export const Footer = () => (
  <footer>
    <div className="flex items-center justify-center gap-24">
      <img src={bunny} className="w-48"/>
      <BrandName className="text-9xl"/>
      <img src={tiger} className="w-48 rotate-10"/>
    </div>
    <p className="text-center font-motor text-xl m-16">© 2025 Copyright tea joint inc., All Rights Reserved.</p>
  </footer>
);
