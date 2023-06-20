const mongoose = require('mongoose')
const URI = 'mongodb://localhost/mern-task'
// CREANDO LA CONEXION CON LA BASE DE DATOS MONGODB
mongoose.connect(URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err))

module.exports = mongoose