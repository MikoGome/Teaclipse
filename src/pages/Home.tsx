import { Caption } from "../components/Caption";
import { Logo } from "../components/Logo";

import { Header } from "../components/Header";
import { Section } from "../layouts/Section";
import { BackgroundCloud } from "../components/BackgroundCloud";
import { ForegroundCloud } from "../components/ForgroundCloud";

export const Home = () => (
  <Section id="home" className="justify-start pt-24">
    <Header />
    <div className="flex justify-center items-center relative">
      <Caption value="HERE FOR" className="flex-1 text-end" />
      <Logo className="w-125 min-w-96 flex-10" />
      <Caption value="YOUR EVERY PHASE" className="flex-1" />
    </div>
    <BackgroundCloud className="bottom-0 -right-1/9 w-1/2"/>
    <BackgroundCloud className="scale-x-[-1] w-2/5 -left-1/8 bottom-0"/>
    <ForegroundCloud className="w-1/3 right-0 bottom-0"/>
    <ForegroundCloud className="w-1/3 left-40 bottom-0 -translate-y-10"/>
  </Section>
);
