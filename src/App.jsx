import Weather from "./component/Weather";
import Forecast from "./component/Forecast";
import { useState } from "react";

function App() {
  const [inputLocation, setInputLocation] = useState("");

  const [currentLocation, setCurrentLocation] = useState("London");

  const handleFind = () => {
    setCurrentLocation(inputLocation);
    setInputLocation("");
  }

  return (
    <div className="flex flex-col bg-sky-400">
      <div className="flex my-2 py-2 justify-center">
        <input type="text" placeholder="Location" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} className="border p-2 px-3 rounded-lg"/>
        <button onClick={handleFind} className="border px-4 ml-3 rounded-2xl">Find</button>
      </div>
      
      <Weather currentLocation={currentLocation} />
      <Forecast currentLocation={currentLocation}/>
      <p className="w-2/6 border px-3 py-1 mb-5 mx-auto text-center rounded-2xl shadow-lg bg-red-400 font-bold">Forecast timing :- 12:00 PM</p>
    </div>
  )
}

export default App;
