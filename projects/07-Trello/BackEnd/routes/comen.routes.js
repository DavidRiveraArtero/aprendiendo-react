const express = require('express')
const router = express.Router()

const Comen = require("../models/comen")
const Tarea = require("../models/tarea")

const findTarea =  async (id_tarea) => {
    const exist = await Tarea.findById(id_tarea)
                        .then(resp => {
                            if(resp){
                                return true
                            }
                        })
                        .catch(err => {
                            return false
                        })
    return exist
}

router.get("/", async (req, res) => {
    Comen.find()
        .then(resp => {
            if(resp){
                res.json(resp)
            }
        })
        .catch(err => {
            res.json({error:"A ocurrido un error !!! "})
        })
})

router.get("/:id", async (req, res) => {
    Comen.findById(req.params.id)
        .then(resp => {
            if(resp){
                res.json(resp)
            }
        })
        .catch(err => {
            res.json({error : "El commentario no ha sido encontrado"})
        })
})


router.post("/", async (req, res) => {
    const {fk_tarea, comen} = req.body
    console.log(typeof(fk_tarea))
    if(!findTarea(fk_tarea)){
        res.json("Lo sentimos la tarea que nos proporcionas no existe")
    }

    const newComen = new Comen(
        {
            FK_ID_Tarea : fk_tarea,
            comentario : comen 
        }
    )

    await newComen.save()
            .then(resp => {
                if(resp){
                    res.json("Se ha creado con exito")
                }
            })
            .catch({error:"A ocurrido un error"})
})

module.exports = router