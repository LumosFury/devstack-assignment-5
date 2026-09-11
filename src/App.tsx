import Nav from "./components/Nav";
import Banner from "./components/Banner";

const technologiesPromise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  console.log(technologiesPromise)
  return (
    <>
      <Nav />
      <Banner />
    </>
  );
}

export default App;
