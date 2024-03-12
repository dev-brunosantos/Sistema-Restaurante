const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const rotas = require('./routes')

const app = express()

app.set('views', 'views')
app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(rotas)

module.exports = app