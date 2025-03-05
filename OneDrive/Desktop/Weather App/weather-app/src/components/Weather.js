import React, { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import searchIcon from "../assets/search-26.png"
import cloudIcon from "../assets/cloud-96.png"
import drizzleIcon from "../assets/drizzle-96.png"
import humidityIcon from "../assets/humidity.gif"
import rainIcon from "../assets/rain-cloud-96.png"
import snowIcon from "../assets/snow-96.png"
import sunnyIcon from "../assets/sunny-96.png"
import windIcon from "../assets/wind.gif"

function Weather() {

    const inputRef = useRef()

    const [WeatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": sunnyIcon,
        "01n": sunnyIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
    }

    const search = async (city) => {

        if(city === "") {
            alert("Please enter city name")
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=653d278f66ed6efdb8fc8af9a2ca4d9f`

             const response = await fetch(url);
             const data = await response.json();


             if(!response.ok) {
                alert(data.message)
                return;
             }

            //  console.log(data);
             const icon = allIcons[data.weather[0].icon] || sunnyIcon;
             setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
             })
             
        } catch (error) {
            setWeatherData(false)
            console.error("Error:", error);
            
        } 
    } 


    useEffect(() => {
        search("Addis Ababa");
    }, []);

  return (
    <div className='weather'>
        <div className='search-box'>
            <input ref={inputRef} type='text' placeholder='Search City'/>
            <img src={searchIcon} alt='' onClick={() => search(inputRef.current.value)}/> 
        </div>

        {WeatherData?<>
        <br/>
        <img src={WeatherData.icon} alt='' className='weather-icon'/>
        <p className='temprature'>{WeatherData.temprature}°C</p>
        <p className='location'>{WeatherData.location}</p>

        <div className='weather-data'>
            <div className='col'>
                <img src={humidityIcon} alt=''/>
                <div>
                    <p>{WeatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='col'>
                <img src={windIcon} alt=''/>
                <div>
                    <p>{WeatherData.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>

        </>:<></>}



    </div>
  )
}

export default Weather