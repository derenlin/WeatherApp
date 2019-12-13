import React, { useState } from 'react'
import Head from '../components/head'
import Form from '../components/form'
import Display from '../components/display'

const WeatherApp = () => {
    const [weatherData, setWeather] = useState(null)
    const [country, setCountry] = useState('United States')
    const [err, setErr] = useState(false)
    const [unit, setUnit] = useState('imperial')

    const hours = (new Date()).getHours()
    const isDayTime = hours > 6 && hours < 20

    const openWeatherCall = (city) => {
        if(city !== '') {
            fetch(`/openweather/city/${city}/${unit}`)
            .then(res => res.json())
            .then(data => {
                if(data.cod == 404) {
                    setErr('City not found')
                } else {
                    setWeather(data)
                }
                //data.name = city name
                //data.sys.country = ISO name
            })
        } else {
            setErr('Please enter a city')
        }
    }

    const convert = (i) => {
        if(i !== unit && weatherData !== null) {
            if(unit == 'imperial') {
                setUnit('metric')
                const newWeather = weatherData
                newWeather.main.temp = ((newWeather.main.temp - 32) * 5) / 9
                setWeather(newWeather)
            } else {
                setUnit('imperial')
                const newWeather = weatherData
                newWeather.main.temp = ((newWeather.main.temp * 9) / 5) + 32
                setWeather(newWeather)
            }
        } else {
            setUnit(i)
        }
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Head/>
                <Form getWeatherInfo={(city) => openWeatherCall(city)} error={err} setError={setErr} isDayTime={isDayTime}/>
                <Display data={weatherData} unit={unit} changeUnit={(unitChange) => convert(unitChange)} isDayTime={isDayTime}/>
            </div>
            <div style={{textAlign: 'center'}} >Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default WeatherApp
