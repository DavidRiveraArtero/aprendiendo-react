const express = require('express')
const router = express.Router()


const Tarea = require("../models/tarea")
const Tabla = require("../models/tabla")
const Comen = require("../models/comen")

const TablaFindById = (id) => {
   
   const findID =  Tabla.findById(id)
        .then(result => {
            if(result){
                console.log("Tabla Encontrada: ")
                return true
            }
  
        })
        .catch(err => {
           return false
        })
    
    return findID

}

router.get('/', async (req,res)=>{
    
    const tarea = await Tarea.find()
    res.json(tarea)
})



router.post('/:id_tabla',async(req,res,next)=> {
    const {nombre,posicion} = req.body
   
    const findTarea = await TablaFindById(req.params.id_tabla)
    console.log(findTarea)
    if(!findTarea){
        res.json({error: "Lo sentimos no se encontro la Tarea"})
    }else{
        const id = req.params.id_tabla 
        const newTarea = new Tarea({
            FK_ID_Tabla : id,
            nombre: nombre,
            posicion:posicion
        })
        await newTarea.save()
        res.json("Tabla Creada")
    }

    
             
})

router.put('/:id', async(req,res,next)=>{
    
    const {id_tabla, nombre} = req.body
    let UpdateTarea
    // COMPROBAR QUE EL ID_TABLA QUE AÑADIMOS NUEVO EXISTA EN LA TABLA 
    const findId = await TablaFindById(id_tabla) 
    if(id_tabla == "undefined"){
        console.log("dentro")
    
        if(!findId){
            res.json({error: "Lo sentimos no lo pudimos encontrar"})
            return next("Lo sentimos no lo pudimos encontrar")
        }

        // SI TODO ESTA BIEN CREAMOS LA TAREA CON LA NUEVA INFORMACION
        UpdateTarea = new Tarea({
            FK_ID_Tabla:id_tabla,
            _id:req.params.id
        })

    }else{
       
        UpdateTarea = new Tarea({
            nombre:nombre,
            _id:req.params.id
        })
       
    }
    console.log(req.params.id)
    // BUSCAMOS LA TAREA Y SE ACUTALIZA SI NO HAY NINGUN ERROR 
    Tarea.findByIdAndUpdate(req.params.id,UpdateTarea)
        .then(result => {
            
            if(result){
                res.json({succes:"Tarea Actualizada"})
            }
        })
        .catch(err => {
            res.json({error: "A ocurrido algun error" + err})
        })
})


router.delete("/:id", async (req, res) => {

    const allcoment = await Comen.find()


    Tarea.findByIdAndDelete(req.params.id)
        .then(resp => {
            if(resp){
                res.json("Tarea Eliminada 😎")
            }
        })
        .catch(err => {
            res.json("Ah ocurrido un error")
        })
})

router.get("/:id", async (req, res) => {
    Tarea.findById(req.params.id)
        .then(resp => {
            if(resp){
                res.json(resp)
            }
        })
        .catch(err => {
            res.json("Lo sentimos no existe esta tarea")
        })
})


module.exports = router