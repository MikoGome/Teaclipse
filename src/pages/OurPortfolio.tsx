import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

import { Section } from "../layouts/Section";

import drinks from "../assets/images/drinks.jpeg";
import christmas from "../assets/images/christmas.jpeg";
import food from "../assets/images/food.jpeg";

import { BackgroundCloud } from "../components/BackgroundCloud";
import { ForegroundCloud } from "../components/ForgroundCloud";

export const OurPortfolio = () => (
  <Section id="ourportfolio">
    <div className="flex flex-wrap gap-24">
      <div className="flex-1">
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
      </div>
      <figure className="flex-1 grid grid-cols-2 grid-rows-3 gap-8 h-200 basis-md">
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
    </div>
    <BackgroundCloud className="w-5xl -right-50 -top-40 opacity-50"/>
    <ForegroundCloud className="scale-x-[-1] w-xl bottom-0 left-0 opacity-75"/>
  </Section>
);
