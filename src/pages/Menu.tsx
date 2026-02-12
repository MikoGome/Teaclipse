import menu_page_1 from "../assets/menu/menu_page_1.png";
import menu_page_2 from "../assets/menu/menu_page_2.png";
import { Header } from "../components/Header";

export const Menu = () => (
  <>
    <Header className="pt-12"/>
    <figure className="flex flex-col md:flex-row">
      <img src={menu_page_1} className="w-full md:flex-1" />
      <img src={menu_page_2} className="w-full md:flex-1" />
    </figure>
  </>
);
