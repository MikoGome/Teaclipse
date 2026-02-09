import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

import { Section } from "../layouts/Section";

import leftmoon from "../assets/images/leftmoon.png";
import rightmoon from "../assets/images/rightmoon.jpeg";
import sun from "../assets/images/sun.png";
import { ForegroundCloud } from "../components/ForgroundCloud";
import { BackgroundCloud } from "../components/BackgroundCloud";

export const TuneIn = () => (
  <Section id="tunein">
    <div className="flex flex-wrap items-center">
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
        <br/>
        <h2 className="text-maroon text-2xl font-bold text-center">
          "HERE FOR YOUR EVERY PHASE"
        </h2>
        <br/>
        <p className="font-opensans">
          Just like our slogan, we aim to become a space inclusive and open to
          everyone. We hope you can join us on our journey, and we hope to be
          part of your journey very soon.
        </p>
      </div>
      <div>
        <Eclipse />
        <h2 className="text-maroon text-4xl font-motor text-center m-10">
          BROWSE OUR MENU
        </h2>
      </div>
    </div>
    <ForegroundCloud className="w-150 top-0 right-0 translate-x-20"/>
    <BackgroundCloud className="w-2xl scale-x-[-1] left-0 bottom-0 -translate-x-1/4 translate-y-50 opacity-75"/>
  </Section>
);

const Eclipse = () => (
  <figure className="flex-1 gap-6 bg-no-repeat bg-contain bg-center overflow-visible relative w-3xl">
    <img src={sun} className="inset-0" />
    <div className="[clip-path:ellipse(50%_50%_at_right_center)] absolute right-1/2 top-0 -translate-x-2 translate-y-20 w-125 h-125 overflow-hidden">
      <img src={leftmoon} className="translate-x-30" />
    </div>
    <div className="[clip-path:ellipse(50%_50%_at_left_center)] absolute left-1/2 bottom-0 translate-x-2 -translate-y-20 w-125 h-125 overflow-hidden">
      <img src={rightmoon} className="-translate-x-30 -translate-y-40" />
    </div>
  </figure>
);
