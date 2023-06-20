const mongoose = require('mongoose')

const {Schema} = mongoose

const TareaSchema = new Schema({
    FK_ID_Tabla: 
    { type: String, required:true, ref:"Tabla"}
    ,
    nombre: { type : String, required:true},
    Fecha: {type: Date, default:Date.now, required:true}
})

module.exports = mongoose.model('Tarea',TareaSchema)