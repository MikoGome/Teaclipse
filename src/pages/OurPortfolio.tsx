import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

import { Section } from "../layouts/Section";

import drinks from "../assets/images/drinks.jpeg";
import christmas from "../assets/images/christmas.jpeg";
import food from "../assets/images/food.jpeg";

import { ForegroundCloud, BackgroundCloud } from "../components/Clouds";

export const OurPortfolio = () => (
  <Section id="portfolio">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-24">
      <div className="flex-1">
        <Title value="TEACLIPSE: SECOND CONTACT" />
        <SubTitle value="OUR PORTFOLIO" />
        <p className="font-opensans relative">
          We are currently operating on a pop-up basis under the name “Tea
          Joint.” We have been working with other small businesses and
          collaborating with them to sell our drinks at their storefront.
          <br />
          <br />
          Through Instagram and help of word-of-mouth, we have also participated
          in fundraisers and fulfilled private orders for parties and weddings.
          <br />
          <br />
          We are gradually increasing our participation in local community
          events and night markets across the Los Angeles area. Hopefully, we
          will see you soon in an area near you!
          <ForegroundCloud className="scale-x-[-1.3] scale-y-[1.3] w-2/3 top-full right-full translate-x-1/2 translate-y-5/7 opacity-50" />
        </p>
      </div>
      <GridPictures />
    </div>
    <BackgroundCloud className="w-5xl -right-50 -top-40 opacity-50" />
  </Section>
);

export const GridPictures = () => (
  <figure className="flex-1 grid grid-cols-[1fr_1fr] grid-rows-5 gap-x-6 gap-y-12 min-w-80 max-w-3/5 lg:max-w-full aspect-square self-center">
    <img
      src={drinks}
      className="row-start-1 row-span-3 w-full h-full object-cover"
    />
    <img
      src={christmas}
      className="row-start-4 row-span-2 w-full h-full object-cover object-[50%_80%]"
    />
    <img
      src={food}
      className="col-start-2 row-start-1 row-span-5 w-full h-full object-cover"
    />
  </figure>
);
