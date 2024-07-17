const ForecastCard = (data) => {
    
    const {dt_txt, main, wind} = data?.data;
  return (
    <div className="flex flex-col justify-between border rounded-lg shadow-xl m-3 p-3 h-52 text-center bg-sky-200">
        <div className="m-1 font-bold text-lg">{dt_txt.substring(0,10)}</div>

        <div className="m-1">
          <div className="font-semibold">Temperature : {main?.temp} °C</div>
          <div className="m-1">
          </div>
        </div>

        <div className="m-1">
          <div className="">Humidity : {main?.humidity}%</div>
          <div>Wind Speed : {wind?.speed} m/s</div>
        </div>
    </div>
  )
}

export default ForecastCard