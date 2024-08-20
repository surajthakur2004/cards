import { useState } from "react";
import {HashRouter} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./data";
import Tour from "./components/Tour";

function App() {
  const [tourData, setTourData] = useState(data);

  function removeHandler(id) {
    const updatedData = tourData.filter((data) => data.id !== id);

    setTourData(updatedData);
  }

  function refreshHandler() {
    setTourData(data);
  }

  if (tourData.length === 0) {
    return (
      <div className="text-center mt-[50px]">
        <h2 className="font-black text-5xl">
          Oops!, 😔 No more journeys available{" "}
        </h2>
        <button
          onClick={refreshHandler}
          className="mt-[400px] font-bold rounded-lg text-2xl border-2 border-solid p-[10px] bg-[#c084fc]"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <HashRouter>
    <div className="h-max w-[100vw] flex justify-center item-center">
      <Tour tourData={tourData} a={removeHandler}></Tour>
    </div>
        </HashRouter>
    </>
  );
}

export default App;
