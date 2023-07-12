const express = require('express')
const router = express.Router()

const Tabla = require('../models/tabla');


router.get('/', async(req,res)=> {
    const tablas = await Tabla.find();
    res.json(tablas)
})

router.post('/', async(req,res,next) => {
    
    if(!req.body?.nombre || !req.body?.posicion){
        res.json("error")
        return next("Error Falta INFORMACION")
    }
    const getTable = await Tabla.find()
    

    const {nombre,posicion} = req.body
    // MIRAR QUE LA POSICION NO EXISTA
    for(var x = 0 ; x<getTable.length;x++){
       
        if(getTable[x].posicion == posicion){
            res.json("Error la posicion ya existe")
            return next("Error la posicion ya existe")
        }
    }

    const tabla = new Tabla({nombre,posicion})
    await tabla.save()
    res.json("Tabla Creada")
})

router.put('/:id',async(req,res) => {
    const {posicion} = req.body
    const updateTable = {posicion}
    console.log("POSICION: ", posicion)
    console.log("ID: ", req.params.id)
    Tabla.findByIdAndUpdate(req.params.id,updateTable)
        .then(resp =>{
            if(resp){
                res.json("Tabla Actualizada")
            }
        }).catch(err => {
            console.log(err)
            res.json("A OCURRIDO UN ERROR")
        })

})

router.delete("/:id",async(req,res,next) => {
    

    Tabla.findByIdAndDelete(req.params.id)
        .then(result => {
            if(result){
                res.json("ELIMINADO")
            }
        })
        .catch(err => {
            console.log(err)
            res.json("No se encontro")
        })
  
})

router.get("/:id",async (req,res)=> {
    await Tabla.findById(req.params.id)
        .then(result => {
            if(result){
                res.json(result)
            }
        })
        .catch(err=>{
            res.json("No existe")
        })
})

module.exports = router