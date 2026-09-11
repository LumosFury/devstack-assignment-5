import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologyCard from "./components/Technologies/Technology";
import { Suspense } from "react";
import type { ItechnologyTypes } from "./types/technologyTypes";

const technologiesFetch = async ():Promise<ItechnologyTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const technologiesPromise = technologiesFetch();
function App() {
  // console.log(technologiesPromise)
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback = {<h2>Loading...</h2>}>
        <TechnologyCard technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
