import { SubCaption } from "../components/SubCaption";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";

import { Section } from "../layouts/Section";

export const Contact = () => (
  <Section id="contact" className="overflow-hidden">
    <Title value="CONTACT US" />
    <div className="flex flex-wrap gap-4 justify-between lg:mb-12">
      <div className="flex-1">
        <SubCaption value="INQUIRIES?" className="text-brown" />
        <SubCaption value="COLLABORATIONS?" className="text-brown" />
        <SubCaption value="ORDERS?" className="text-brown" />
      </div>
      <div className="flex-1">
        <SubCaption value="EMAIL" className="text-maroon text-center" />
        <a href="mailto:teajointusa@gmail.com">
          <SubCaption value="TEAJOINTUSA@GMAIL.COM" className="text-center hover:scale-110 transition" />
        </a>
      </div>
      <div className="flex-1">
        <SubCaption value="INSTAGRAM" className="text-maroon text-center" />
        <a href="https://www.instagram.com/teajointusa/">
          <SubCaption value="@TEAJOINTUSA" className="text-center hover:scale-110 transition" />
        </a>
      </div>
    </div>
    <Footer className="flex-1 flex flex-col justify-center items-center mt-24" />
  </Section>
);
