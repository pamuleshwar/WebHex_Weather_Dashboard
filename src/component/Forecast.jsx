import { FORECAST_URL, KEY} from "../utils/api";

import { useState, useEffect} from "react";
import ForecastCard from "./ForecastCard";

const Forecast = ({currentLocation}) => {

    const [foreCastData, setForeCastData] = useState(null);

    useEffect(() => {
        if(currentLocation){
            findData(currentLocation);
        }
    },[currentLocation]);

    const findData = async () => {
        const data = await fetch(`${FORECAST_URL}&q=${currentLocation}&appid=${KEY}`);
        const json = await data.json();

        setForeCastData(json?.list.filter((e) => e?.dt_txt.includes("12:00:00")));
    }

    
    return (
        <div className="border my-5 w-11/12 mx-auto flex justify-center flex-wrap bg-gradient-to-br from-sky-300 via-blue-300 to-green-300 shadow-xl">
            {
                foreCastData && foreCastData.map((data) => <ForecastCard key={data?.dt} data={data}/>)
            }
        </div>
    )
}

export default Forecast;