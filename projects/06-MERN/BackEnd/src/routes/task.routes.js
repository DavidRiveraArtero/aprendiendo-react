const express = require('express');
const router = express.Router()
const cors = require('cors')

const Task = require('../models/task');


router.get('/', async (req,res) => {

    const tasks = await Task.find();
  
    res.json(tasks)
})

router.post('/', async (req,res) => {
    
    const {title, description} = req.body
    console.log("hpña",req.body)
    const task = new Task({title, description})
    await task.save()
    res.json('recived')
})

router.put("/:id", async(req, res) => {
    const {title, description} = req.body
    const newTask = {title,description}

    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json('Actualizado')
})

router.delete('/:id', async (req,res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json("Delete")
})

router.get('/:id', async (req,res) => {
    const task = await Task.findById(req.params.id)
    res.json(task)
})

module.exports = router