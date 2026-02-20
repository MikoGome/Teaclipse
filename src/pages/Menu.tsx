import menu_page_1 from "../assets/menu/menu_page_1.png";
import menu_page_2 from "../assets/menu/menu_page_2.png";
import { Header } from "../components/Header";
import { Section } from "../layouts/Section";

export const Menu = () => (
  <>
    <Header className="p-6 px-6 sm:px-12 md:px-[10%] lg:px-[15%]" />
    <figure className="flex flex-col md:flex-row">
      <img src={menu_page_1} className="w-full md:flex-1 md:min-w-0" />
      <img src={menu_page_2} className="w-full md:flex-1 md:min-w-0" />
    </figure>
  </>
);
