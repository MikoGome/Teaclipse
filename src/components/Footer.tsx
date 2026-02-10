import { BrandName } from "./BrandName";

import { ForegroundCloud, BackgroundCloud } from "./Clouds";

import bunny from "../assets/images/bunny.png";
import tiger from "../assets/images/tiger.png";

type FooterProps = {
  className?: string;
}

export const Footer = (props: FooterProps) => (
  <footer className={`relative ${props.className ?? ''}`}>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-24">
      <img src={bunny} className="w-24 md:w-48"/>
      <BrandName className="text-4xl md:text-9xl lg:text-[150px]"/>
      <img src={tiger} className="w-24 md:w-48 rotate-10"/>
    </div>
    <p className="text-center font-motor text-sm md:text-xl m-8 md:m-16">© 2025 Copyright tea joint inc., All Rights Reserved.</p>
    <BackgroundCloud className="w-2xl right-0 top-0 left-full translate-y-1/8 -translate-x-1/3"/>
    <BackgroundCloud className="w-2xl scale-x-[-1] left-0 bottom-0 translate-y-1/4 -translate-x-2/3"/>
    <ForegroundCloud className="w-xl scale-x-[-1] top-0 left-full"/>
    <ForegroundCloud className="w-xl scale-x-[-1] top-0 right-full translate-x-1/3"/>
  </footer>
);
