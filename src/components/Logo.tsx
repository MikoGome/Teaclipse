import logo from "../assets/logo/logo.png";
import shadow from "../assets/logo/logoshadow.png";

type LogoProps = {
  className: string;
};

export const Logo = (props: LogoProps) => (
  <div className={`relative ${props.className ?? ''}`}>
    <img src={logo} className="w-full"/>
    <img src={shadow} className="absolute inset-0 -z-10 w-full"/>
  </div>
);
