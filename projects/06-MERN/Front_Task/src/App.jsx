import { useState } from 'react'
import { FormTask } from './components/formTask/formTask'
import { TableTask } from './components/tableTask/tableTask'
import './App.css'

function App() {

  
  const [nameTask, setNameTask] = useState("")
  const [updateNameTask, setUpdateNameTask] = useState("")
  const [updateDescTask, setUpdateDescTask] = useState("")
  const [submit, setSubmit] = useState(false)

  const [buttonClick, setButtonClick] = useState(false)
  const [id,setId] = useState("")

  return (
    <>
      <header>
        <h1 className='header_title'>Gestor de Tareas</h1>
      </header>
      
     
      <div className='box_task'>
        <section className="container">
          <FormTask nameTask={nameTask} 
                    setNameTask={setNameTask} 
                    updateNameTask={updateNameTask} 
                    updateDescTask={updateDescTask} 
                    setButtonClick={setButtonClick}
                    buttonClick={buttonClick} 
                    id={id}
                    submit={submit}
                    setSubmit={setSubmit}/>
        </section>
        <TableTask 
                   setUpdateNameTask={setUpdateNameTask} 
                   setUpdateDescTask={setUpdateDescTask} 
                   setButtonClick={setButtonClick} 
                   buttonClick={buttonClick} 
                   setId={setId}
                   submit={submit}/>
      </div>  
    </>
  )
}

export default App
