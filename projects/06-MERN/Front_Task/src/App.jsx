import { useState } from 'react'
import { FormTask } from './components/formTask/formTask'
import { TableTask } from './components/tableTask/tableTask'
import './App.css'

function App() {

  
  const [nameTask, setNameTask] = useState("")
  
  
  return (
    <>
      <header>
        <h1 className='header_title'>Gestor de Tareas</h1>
      </header>
      
     
      <div className='box_task'>
        <section class="container">
          <FormTask nameTask={nameTask} setNameTask={setNameTask}/>
        </section>
        <TableTask nameTask={nameTask}/>
      </div>  
    </>
  )
}

export default App
