import { Caption } from "../components/Caption";
import { Logo } from "../components/Logo";

import { Header } from "../components/Header";
import { Section } from "../layouts/Section";
import { ForegroundCloud, BackgroundCloud } from "../components/Clouds";

export const Home = () => (
  <Section id="home" className="justify-start">
    <Header />
    <div className="flex flex-col lg:flex-row justify-center items-center relative">
      <div className="relative w-full text-center lg:top-16 lg:text-end">
        <Caption value="HERE FOR" className="whitespace-nowrap"/>
        <ForegroundCloud className="top-full max-w-96 origin-top scale-150" />
      </div>
      <Logo className="w-7xl max-w-1/2 min-w-80 -order-1 lg:order-0" />
      <div className="relative w-full text-center lg:top-16 lg:text-start">
        <Caption value="YOUR EVERY PHASE" className="whitespace-nowrap" />
        <ForegroundCloud className="origin-top max-w-lg bottom-0 left-0 translate-x-1/2 2xl:scale-150 translate-y-[110%]" />
      </div>
    </div>
    <BackgroundCloud className="top-0 -right-1/9 w-1/2" />
    <BackgroundCloud className="scale-x-[-1] w-2/5 -left-1/8 bottom-0" />
  </Section>
);
