import {useContext, useState, useEffect} from 'react'
import RegionContext from './RegionContext'

const date = new Date();
const currentDay = date.getDay();

const getDayName = (day) => {

  if (day > 6) {
    day = Math.abs(day - 7)
  }

  switch (day) {
    case 0:
      return "Sun"
      break;
    case 1:
      return "Mon"
      break;
    case 2:
      return "Tue"
      break;
    case 3:
      return "Wed"
      break;
    case 4:
      return "Thu"
      break;
    case 5:
      return "Fri"
      break;
    case 6:
      return "Sat"
      break;
  }
}

function ForecastCards() {
  const {region, setRegion} = useContext(RegionContext);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (region === "default") {
      return;
    } else {
      setIsLoading(true);

      const weatherAPI = `http://api.weatherapi.com/v1/forecast.json?key=cd590fafb2af42ce8c6121504232606&q=${region}&days=7&aqi=no&alerts=no`;

      console.log(weatherAPI)

      fetch(weatherAPI)
      .then((res) => res.json())
      .then((res) => (
        res.forecast.forecastday.map((item) => item.day)
      ))
      .then((forecastData) => setWeather(forecastData))

      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      })

      .finally(() => setIsLoading(false))
    }
  }, [region])

  return (
    <div className='forecast-cards'>
      {(isLoading && (region !== "default")) && <h1>Loading...</h1>}
      {!isLoading && weather.map((item, index) =>(
        <div key={index} className={(index === 0) ? "first-card card" : "card"}>
          <div className='day-name'>{getDayName(currentDay + index)}</div>
          <img className='icon' src={item.condition.icon}></img>
          <div className='condition'>{item.condition.text}</div>
          <div className='temps'>
            <div className='max-temp'>{item.maxtemp_c}</div>
            <div className='min-temp'>{item.mintemp_c}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ForecastCards