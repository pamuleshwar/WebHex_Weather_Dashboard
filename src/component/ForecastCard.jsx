const ForecastCard = (data) => {
  console.log(data);
    
    const {dt_txt, main, wind} = data?.data;
  return (
    <div className="border m-5 p-3 h-52 text-center bg-sky-200">
        <div className="m-1">{dt_txt.substring(0,10)}</div>

        <div className="m-1">
          <div className="">Temperature : {main?.temp} °C</div>
          <div className="m-1">
            <div>Max. Temp : {main?.temp_max} °C</div>
            <div>Min. Temp : {main?.temp_min} °C</div>
          </div>
        </div>

        <div className="m-1">
          <div className="">Humidity : {main?.humidity}%</div>
          <div>Wind Speed : {wind?.speed}m/s</div>
        </div>
    </div>
  )
}

export default ForecastCard