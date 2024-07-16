const WeatherCard = (data) => {
    
    const {name,main,wind} = data?.data;
    // console.log(main);

  return (
    <div className="border rounded-lg w-9/12 mx-auto mt-3 mb-5 p-5 bg-gradient-to-br from-sky-300 via-blue-300 to-green-300 shadow-xl">
        <p className="w-7/12 mx-auto text-6xl uppercase text-center py-3 border rounded-xl font-semibold shadow-md">{name}</p>

        <div className="mx-auto my-3 w-10/12 border rounded-lg text-lg shadow-md">
          <div className="w-1/2 mx-auto my-2 text-3xl text-center p-3 border bg-sky-300 rounded-md">Temperature : {main?.temp} °C</div>
          <div className="flex justify-between my-3">
            <div className="ml-5 p-2 border rounded-md">Max. Temperature : {main?.temp_max} °C</div>
            <div className="mr-5 p-2 border rounded-md">Min. Temperature : {main?.temp_min} °C</div>
          </div>
        </div>

        <div className="flex justify-between p-3 border rounded-lg text-lg shadow-md">
          <div className="ml-5 p-2 border rounded-md">Humidity : {main?.humidity}%</div>
          <div className="mr-5 p-2 border rounded-md ">Wind Speed : {wind?.speed}m/s</div>
        </div>
    </div>
  )
}

export default WeatherCard