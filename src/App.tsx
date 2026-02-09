import "./App.css";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { OurPortfolio } from "./pages/OurPortfolio";
import { TuneIn } from "./pages/TuneIn";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Section } from "./layouts/Section";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <OurPortfolio />
      <TuneIn />
      <Contact />
    </>
  );
}

export default App;
