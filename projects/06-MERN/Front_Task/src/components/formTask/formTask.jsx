import { useState, useEffect } from "react"

export function FormTask ({nameTask,setNameTask}){
    console.log(nameTask)
    const [descriptionTask, setDescriptionTask] = useState("")

    const [searchNameTask,setSearchNameTask] = useState("")
    const [searchDescriptionTask,setSearchDescriptionTask] = useState("")


    useEffect(() => {
        if(nameTask.length == 0) return
        fetch('http://localhost:3000/api/tasks',{
        method:'POST',
        body: JSON.stringify({
            title:nameTask,
            description:descriptionTask
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        
        })
        setNameTask("")
    },[nameTask])

  

  const submitInfo = (event) => {
    event.preventDefault()
    if(searchNameTask.length == 0) return
    
    setNameTask(searchNameTask)
    setDescriptionTask(searchDescriptionTask)
  }

  const changeInfoTask = (event) => {
      console.log(event.target.value)
      setSearchNameTask(event.target.value)
  }

  const changeDescTask = (event) => {
    setSearchDescriptionTask(event.target.value)
  }

    return (
        <>
            <h2>Añadir Nueva Tarea</h2>
            <form onSubmit={submitInfo}  method="POST">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input id='nameTask' 
                        type='text'
                        placeholder='Name Task' 
                        onChange={changeInfoTask}
                        value={searchNameTask} required/>
                </div>
                <div class="form-group">
                    <label for="mensaje">Mensaje:</label>
                    <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows="5"
                    onChange={changeDescTask} 
                    required/>
                </div>
                <div class="form-group">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        
        </>
    )
}