const mongoose = require('mongoose')

const {Schema} = mongoose

const ComenSchema = new Schema({
    FK_ID_Tarea: { type:String, ref:'Tarea', required:true }
    ,
    comentario: { type : String, required:true},
    Fecha: {type: Date, default:Date.now, required:true}
})

module.exports = mongoose.model('Comentario',ComenSchema)