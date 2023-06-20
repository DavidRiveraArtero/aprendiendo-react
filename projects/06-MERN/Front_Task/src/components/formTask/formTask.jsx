import { useState, useEffect } from "react"
import { updateTask,createTask } from "../../api/taskApi"


export function FormTask ({updateNameTask,updateDescTask,buttonClick,id,setButtonClick,submit,setSubmit}){

    const [descriptionTask, setDescriptionTask] = useState("")

    const [searchNameTask,setSearchNameTask] = useState("")
    const [searchDescriptionTask,setSearchDescriptionTask] = useState("")
    const [textSubmit, setTextSubmit] = useState(false)


    useEffect(() => {
        setSearchNameTask(updateNameTask)
        setDescriptionTask(updateDescTask)
        setTextSubmit(!textSubmit)
    },[buttonClick])

  

  const submitInfo = (event) => {
    event.preventDefault()
    if(searchNameTask.length == 0) return

    setSubmit(!submit)
    if(!buttonClick){
        createTask(searchNameTask,searchDescriptionTask)
    }else{
        setButtonClick(!buttonClick)
        updateTask(id,searchNameTask,searchDescriptionTask)
    }

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
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id='nameTask' 
                        type='text'
                        placeholder='Name Task' 
                        onChange={changeInfoTask}
                        value={searchNameTask} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows="5"
                    onChange={changeDescTask} 
                    required>
                     
                    </textarea>
                </div>
                <div className="form-group">
                       
                    {textSubmit && <button onClick={submitInfo} type="submit">Crear Tarea</button>}                      
                    {!textSubmit && <button onClick={submitInfo} type="submit">Actualizar</button>} 
                    
                </div>
            </form>
        
        </>
    )
}