const mongoose = require('mongoose')

const {Schema} = mongoose

const TablaSchema = new Schema({
    nombre: { type : String, required:true},
    posicion: {type: Number, required:true}
})

module.exports = mongoose.model('Tabla',TablaSchema)