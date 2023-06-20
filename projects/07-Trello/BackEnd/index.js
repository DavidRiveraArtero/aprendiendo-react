const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const path = require('path')

const { mongoose } = require('./database.js')

const app = express()

// SETTINGS
app.set('port',process.env.PORT || 3000)


// MIDELWARE
app.use(cors())
app.use(express.json())
app.use(morgan('dev'));


// ROUTES 
app.use('/api/tabla', require('./routes/tabla.routes'));
app.use('/api/comen', require('./routes/comen.routes'));
app.use('/api/tarea', require('./routes/tarea.routes'));


// START SERVER
app.listen(app.get('port') , () => {
    console.log(`server on port ${app.get('port')}`)
})