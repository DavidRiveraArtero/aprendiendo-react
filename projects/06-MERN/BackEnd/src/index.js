const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const path = require('path')

const { mongoose } = require('./database')


const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);


// MIDDLEWARE ESTO SE EJECUTA ANTES DE ENTRAR A LAS RUTAS
app.use(morgan('dev'));
app.use(cors())
app.use(express.json()) // ESTO COMPRUEBA SI LA INFORMACION QUE LE LLEGA ES DE FORMATO JSON


// ROUTES
app.use('/api/tasks',require('./routes/task.routes'));

// STATIC FILES

app.use(express.static(path.join(__dirname,'public')))

// START SERVER
app.listen(app.get('port') , () => {
    console.log(`server on port ${app.get('port')}`)
})