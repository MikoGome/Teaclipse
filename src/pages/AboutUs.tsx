import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

import { Section } from "../layouts/Section";

import boba from "../assets/images/boba.jpeg";
import { ForegroundCloud, BackgroundCloud } from "../components/Clouds";

export const AboutUs = () => (
  <Section id="about">
    <div className="flex flex-col-reverse lg:flex-row flex-wrap-reverse items-center lg:items-end gap-6 lg:gap-24">
      <div className="relative flex-1 lg:basis-0 text-center">
        <figure className="inline-block overflow-hidden [clip-path:ellipse(45%_50%)] rotate-20 min-w-48 max-w-3/5 lg:max-w-full relative -z-15">
          <img src={boba} className="-rotate-20 w-full h-full" />
        </figure>
        <ForegroundCloud className="left-0 bottom-0 -translate-x-1/2 translate-y-1/3" />
      </div>
      <div className="flex-2 w-full">
        <Title value="TEACLIPSE: FIRST CONTACT" />
        <SubTitle value="ABOUT US" />
        <p className="font-opensans">
          With roots in Southern California, Teaclipse’s mission is to recall
          the nostalgic Asian flavors of your childhood into our products.
          Inspired by the drinks we grew up with--banana milk, barley tea,
          Yakult, and more -we’ve built a space that honors our childhood
          memories while creating something fresh and modern. Our goal is to
          craft drinks that feel like home, while taking our own creative spin.
          <br />
          <br />
          We’re more than just a boba shop -we’re a third space. In a time where
          public, social spaces are shrinking, we’re fostering an environment
          where gathering is a necessity: a place where friends meet, families
          rekindle, and the comforting tastes of East and Southeast Asia come to
          life in every sip. Drawing from Japanese, Korean, Taiwanese,
          Vietnamese, and broader Asian influences, our menu blends cultures,
          textures, and memories into something uniquely our own.
          <br />
          <br />
          At Teaclipse, tradition meets creativity. We’re turning the tables on
          classic flavors to create something entirely new, while creating a
          space for everyone at any phase of their life.
        </p>
      </div>
    </div>
    <BackgroundCloud className="w-1/3 scale-x-[-1] -left-25" />
  </Section>
);
