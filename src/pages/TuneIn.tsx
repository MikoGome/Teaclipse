import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { ForegroundCloud, BackgroundCloud } from "../components/Clouds";

import { Section } from "../layouts/Section";

import leftmoon from "../assets/images/leftmoon.png";
import rightmoon from "../assets/images/rightmoon.jpeg";
import sun from "../assets/images/sun.png";
import { HashLink } from "react-router-hash-link";

export const TuneIn = () => (
  <Section id="tunein">
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="flex-1">
        <Title value="TEACLIPSE: TOTALITY" />
        <SubTitle value="WHY SHOULD YOU TUNE IN?" />
        <p className="font-opensans">
          We are a growing business with dreams of opening our first storefront.
          Through our experiences and interactions with people from different
          walks of life, we are constantly developing and refining our drinks to
          bring out the earthy flavors of our tea leaves and stimulating
          memories with flavors from childhood inspirations.
        </p>
        <br />
        <h2 className="text-maroon text-2xl font-bold text-center">
          "HERE FOR YOUR EVERY PHASE"
        </h2>
        <br />
        <p className="font-opensans">
          Just like our slogan, we aim to become a space inclusive and open to
          everyone. We hope you can join us on our journey, and we hope to be
          part of your journey very soon.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full flex-1 relative">
        <ForegroundCloud className="w-150 top-0 left-full -translate-x-1/3" />
        <Eclipse />
        <h2 className="text-maroon text-4xl font-motor text-center m-10 hover:scale-110 transition duration-100">
          <HashLink smooth to="/menu#top">
            BROWSE OUR MENU
          </HashLink>
        </h2>
      </div>
    </div>
    <BackgroundCloud className="w-2xl scale-x-[-1] left-0 bottom-0 -translate-x-1/4 translate-y-50 opacity-75" />
  </Section>
);

const Eclipse = () => (
  <figure className="flex-1 bg-no-repeat bg-contain bg-center overflow-visible relative min-w-80 max-w-4/5 lg:max-w-full -z-30 overflow-x-hidden">
    <img src={sun} className="inset-0" />
    <div className="[clip-path:ellipse(50%_50%_at_right_center)] absolute right-1/2 top-0 -translate-x-2 translate-y-1/6 w-[65%] h-[65%] overflow-hidden">
      <img src={leftmoon} className="translate-x-1/4" />
    </div>
    <div className="[clip-path:ellipse(50%_50%_at_left_center)] absolute left-1/2 bottom-0 translate-x-2 -translate-y-1/6 w-[65%] h-[65%] overflow-hidden">
      <img src={rightmoon} className="-translate-x-1/4 -translate-y-1/4" />
    </div>
  </figure>
);
