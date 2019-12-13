import React, { useState } from 'react'



const errorStyle = {
    color: '#ff4252',
    letterSpacing: 1,
    height: 10,
    marginBottom: 6,
    fontSize: '1.1em'
}

const Form = ({getWeatherInfo, isDayTime, error, setError}) => {
    const [city, setCity] = useState('')

    const inputStyle = {
        minWidth: 350, 
        margin: 20,
        height: '1.5rem', 
        padding: 7, 
        borderRadius: 10,
        border: isDayTime ? '3px solid #272343' : '3px solid #bae8e8', 
        backgroundColor: isDayTime ? '#bae8e8' : '#272343',
        color: isDayTime ? '#272343' : '#bae8e8',
        paddingLeft: 14, 
        fontSize: 14, 
        outline: 'none',
        letterSpacing: 1,
    }
    
    const buttonStyle = {
        letterSpacing: 2,
        borderStyle: 'none',
        backgroundColor: isDayTime ? '#bae8e8' : '#272343',
        minWidth: 350,
        margin: 20,
        color: isDayTime ? '#272343' : '#bae8e8',
        fontSize: '1.2rem',
        outline: 'none',
        cursor: 'pointer',
    }
    
    const divStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: isDayTime ? '#bae8e8' : '#272343', 
        height: '100vh', 
        width: '50%', 
        justifyContent: 'center', 
        minWidth: '500px',
        minHeight: '600px'
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            getWeatherInfo(city)
        }
    }

    return (
        <div style={divStyle}>
            <p style={{fontSize: '2em', letterSpacing: 1, color: 'white', marginBottom: 20}}>Weather App</p>
            <input
                style={inputStyle} 
                onKeyPress={e => handleKeyPress(e)}
                placeholder='Enter a city'
                onChange={e => {
                if(error) setError(false)
                setCity(e.target.value)
            }} />
            <p style={ error ? errorStyle : {opacity: 0, height: 10, marginBottom: 6}}>{error}</p>
            <button style={buttonStyle} onClick={() => getWeatherInfo(city)}>Get Weather</button>
            <style jsx>{`
                input::placeholder {
                    color: ${isDayTime ? '#272343' : '#bae8e8'};
                }
            `}</style>
        </div>
    )
}

export default Form