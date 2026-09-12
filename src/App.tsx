import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologyCard from "./components/Technologies/Technology";
import Footer from "./components/Footer";
import { Suspense } from "react";
import type { ItechnologyTypes } from "./types/technologyTypes";

const technologiesFetch = async ():Promise<ItechnologyTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const technologiesPromise = technologiesFetch();
function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <TechnologyCard technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
