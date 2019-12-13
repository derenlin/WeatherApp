require('dotenv').config()
const express = require('express')
const next = require('next')

const openWeatherService = require('./services/openweather')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleNextRequests = app.getRequestHandler()

const port = 3000

app.prepare()

    .then(() => {
        
        const server = express()

        // Open Weather API
        server.use('/openweather', openWeatherService)

        server.get('/', (req, res) => {
            app.render(req, res, '/weather')
        })

        server.get('*', (req, res) => {
            handleNextRequests(req, res)
          })

        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Running')
          })
})