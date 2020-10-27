//using heroku postgress database hosting 
//for usage first configure heroku database 
require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const AcciaioRoute = require('./Api/Routes/AcciaioRoute')
const ProdottoRoute = require('./Api/Routes/ProdottoRoute')
const ColataRoute = require('./Api/Routes/ColataRoute')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(AcciaioRoute, ProdottoRoute, ColataRoute)
const PORT = process.env.PORT || 5000
app.listen(PORT)