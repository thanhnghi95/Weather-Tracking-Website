import Cloudy from '../types/Cloudy'
import Rainy from '../types/Rainy'
import Snowy from '../types/Snowy'
import Thunderstorm from '../types/Thunderstorm'
import Drizzle from '../types/Drizzle'
import Clear from '../types/Clear'

const Display = ({name,setName,search,getTime,country,weather,temp,wind,feels_like,humidity,pressure}) => {
    const backGround = () =>{
        switch(weather){
            case 'Rain':
              return <Rainy/>
            case 'Clouds':
              return <Cloudy/>
            case 'Snow':
              return <Snowy/>
            case 'Thunderstorm':
              return <Thunderstorm/>
            case 'Drizzle':
              return <Drizzle/>
            case 'Clear':
              return <Clear/>
            default:
              return <Rainy/>
          }
    }
    return ( 
        <section>
            <div className="search-box">
            <input 
                className="search-bar"
                placeholder="Search country..."
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={search}
            />
        </div>
        <div className="box">
            <div className="location-box">
                <div className="location">
                    <h1>
                        {country}
                    </h1>  
                </div>
                <div className="date">
                <h3>Today is: {getTime(new Date())}</h3>
                </div>
            </div> 
            <div className="weather-box">
                <div className="weather">
                    <p>{Math.round(temp-273)}°C</p>               
                </div>
            </div>  
            <div className="information">
                <hr />
                <div className="text">
                    <p>
                        {weather} 
                    </p>
                </div>
          
                <hr />
               <div className="temp">
                    <p>Pressure: {pressure} hPa  </p>
                    <p>Feels like: {feels_like} °C </p>
               </div>
               <hr />
               <div className="temp">
                    <p>Wind: {wind} m/s </p>
                    <p>Humidity: {humidity} %</p>
               </div>
            </div> 
        </div>
        {backGround()}
        </section>
     );
}
 
export default Display;