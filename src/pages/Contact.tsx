import { SubCaption } from "../components/SubCaption";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";

import { Section } from "../layouts/Section";
import { BackgroundCloud } from "../components/BackgroundCloud";
import { ForegroundCloud } from "../components/ForgroundCloud";

export const Contact = () => (
  <Section id="contact" className="overflow-y-hidden overflow-x-hidden">
    <Title value="CONTACT US" />
    <div className="flex flex-wrap justify-between">
      <div className="flex-1">
        <SubCaption value="INQUIRIES?" className="text-brown" />
        <SubCaption value="COLLABORATIONS?" className="text-brown" />
        <SubCaption value="ORDERS?" className="text-brown" />
      </div>
      <div className="flex-1">
        <SubCaption value="EMAIL" className="text-maroon text-center" />
        <SubCaption value="TEAJOINTUSA@GMAIL.COM" className="text-center" />
      </div>
      <div className="flex-1">
        <SubCaption value="INSTAGRAM" className="text-maroon text-center" />
        <SubCaption value="@TEAJOINTUSA" className="text-center" />
      </div>
    </div>
    <Footer />
    <BackgroundCloud className="w-2xl right-0 bottom-0 translate-x-1/7"/>
    <BackgroundCloud className="w-2xl left-0 scale-x-[-1] bottom-0 translate-y-1/4 -translate-x-1/6"/>
    <ForegroundCloud className="w-xl scale-x-[-1] right-0 translate-x-1/3"/>
    <ForegroundCloud className="w-xl scale-x-[-1] left-0 translate-y-1/2 -translate-x-1/10"/>
  </Section>
);
