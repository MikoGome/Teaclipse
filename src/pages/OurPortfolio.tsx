import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

import { Section } from "../layouts/Section";

import drinks from "../assets/images/drinks.jpeg";
import christmas from "../assets/images/christmas.jpeg";
import food from "../assets/images/food.jpeg";

import { ForegroundCloud, BackgroundCloud } from "../components/Clouds";

export const OurPortfolio = () => (
  <Section id="ourportfolio">
    <div className="flex flex-wrap gap-24">
      <div className="flex-1 relative">
        <Title value="TEACLIPSE: SECOND CONTACT" />
        <SubTitle value="OUR PORTFOLIO" />
        <p className="font-opensans">
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
        </p>
        <ForegroundCloud className="scale-x-[-1.3] scale-y-[1.3] w-full top-full left-0 -translate-x-1/2 lg:-translate-y-1/2 opacity-75" />
      </div>
      <GridPictures />
    </div>
    <BackgroundCloud className="w-5xl -right-50 -top-40 opacity-50" />
  </Section>
);

export const GridPictures = () => (
  <figure className="flex-1 grid grid-cols-2 grid-rows-3 gap-8 h-100 md:h-150 lg:h-200 basis-md">
    <img
      src={drinks}
      className="row-start-1 row-span-2 w-full h-full object-cover"
    />
    <img
      src={christmas}
      className="row-start-3 row-span-1 w-full h-full object-cover object-[50%_80%]"
    />
    <img
      src={food}
      className="col-start-2 row-start-1 row-span-3 w-full h-full object-cover"
    />
  </figure>
);
