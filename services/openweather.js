const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/city/:city/:unit', (req, res) => {
    const { city, unit } = req.params
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${process.env.OPENWEATHER_API_KEY}&units=${unit}`)
    .then(response => {
        res.send(response.data)
    })
    .catch(err => {
        res.send(err.response.data)
    })
})

router.get('/weather/:zip', (req, res) => {

})

module.exports = router