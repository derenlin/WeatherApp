import React, { useState, useEffect } from 'react'
import { isoFlipped, ISO, icons } from '../info'

const Display = ({data, unit, changeUnit, isDayTime}) => {
    const [country, setCountry] = useState('United States')

    const divStyle = {
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',  
        height: '100vh', 
        width: '50%', 
        minWidth: 500,
        minHeight: 500,
        backgroundColor: isDayTime ? '#ffffff' : '#363636',
        justifyContent: 'center'
    }

    const buttonStyle = {
        letterSpacing: 2,
        borderStyle: 'none',
        height: 40,
        width: 40,
        fontSize: '2rem',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: '50%'
    }

    const countries = Object.keys(isoFlipped)

    useEffect(() => {
        if(data !== null && 'sys' in data) {
            setCountry(ISO[data.sys.country])
        }
    }, [data])

    const handleCountryChange = (e) => {
        // Add callback for parent to change country to zipcode lookup
        setCountry(e.target.value)
    }

    let currentWeather 

    if(data !== null) {
        currentWeather = 
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{letterSpacing: 2, fontSize: '2rem', margin: 5}} >{data.name}, {country}</h1>
                <img style={{width: 150}} src={icons[data.weather[0].icon]} />
                <p style={{letterSpacing: 1, fontSize: '1.5rem', marginTop: 20}} >{Math.floor(data.main.temp)}<span>&#176;</span> {unit === 'imperial' ? 'F' : 'C'}</p>
                <p style={{letterSpacing: 1, fontSize: '1.5rem', marginTop: 10}}>{data.weather[0].description}</p>
            </div>
    }

    return (
        <div style={divStyle}>
            <div style={{position: 'absolute', top: 10, right: 10, height: 50, width: 120, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} >
                <button style={{...buttonStyle, backgroundColor: unit == 'imperial' ? '#5FDBA7' : isDayTime ? '#ffffff' : '#363636'}} onClick={() => changeUnit('imperial')}>F</button>
                <div style={{border: '1px solid black', height: 36, width: 0}}/>
                <button style={{...buttonStyle, backgroundColor: unit != 'imperial' ? '#5FDBA7' : isDayTime ? '#ffffff' : '#363636'}} onClick={() => changeUnit('metric')}>C</button>
            </div>
            {/* <select onChange={(e) => handleCountryChange(e)}  value={country}>
                {countries.map(item => <option key={item} >{item}</option>)}
            </select> */}
            {currentWeather}
        </div>

    )
}

export default Display