import './App.css'
import { useEffect,useState } from 'react'
import { getTable, postTable,updateTable } from './api/Tabla'
import { getTareas,postTarea } from './api/tareas';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {

  const [tables, setTables] = useState([])
  const [tareas,setTareas] = useState([])
  const [changeNameTable, setChangeNameTable] = useState("")
  const [stateQuickCard, setStateQuickCard] = useState(false)
  const [positionCard,setPositionCard] = useState({})
  const [valueQuickCard,setValueQuickCard] = useState("")

  useEffect(()=>{

    let time = setTimeout(() => {
      getTable(setTables)
      getTareas(setTareas)
    }, 1000)

    return () => {
      clearTimeout(time)
    }
    
  }, [tables])

  const changeName = (event) => {
    setChangeNameTable(event.target.value)
  }

  const submitTabla = (event) => {
    event.preventDefault()
    postTable(changeNameTable, tables.length)
    setChangeNameTable("")

  }

  function handleOnDragEnd(result){
   
    const items = Array.from(tables)
    const [reoderItems] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0,reoderItems)
    setTables(items)
    updateTable(result)

  }

  const showForm = (event) => {
    
    event.target.style.display = "none"
    event.target.parentNode.getElementsByTagName("form")[0].style.display = "block"
  }

  const closeForm = (event) => {
    event.preventDefault()
    
    event.target.parentNode.parentNode.style.display = "none"
    event.target.parentNode.parentNode.parentNode.getElementsByClassName("btn_desplegable")[0].style.display = "block"

  }

  const postTareas = (event) => {
    event.preventDefault()
    
    const txtTarea = event.target[0].value
    const fk_id = event.target.id
    let position = 0
    if(tareas.length != 0){
      for(var x = 0;x<tareas.length;x++){
        if(fk_id == tareas[x].FK_ID_Tabla){
          position++
        }
      }
    }
    postTarea(txtTarea,fk_id,position)    
  }

  const calcularPosition = (event) => {
    const p = event.target.getBoundingClientRect()
    setValueQuickCard(event.target.innerHTML.split("<")[0])
    const positionX = p.x-4.5
    const positionY = p.y
    setPositionCard({
      width:"275px",
      height:'100px',
      position:"absolute",
      top:positionY,
      left:positionX,

    })
    setStateQuickCard(!stateQuickCard)
  }

  const removeQuickCard = (event) => {
   
    setStateQuickCard(!stateQuickCard)
  }

  return (
    <>
      <h1>Trello Prue</h1>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='tables' direction="horizontal">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}  className='tablero'>
              
               
                {
                  tables.map((table, index) => {
                    return (
                      <Draggable key={table._id} draggableId={table._id} index={index} >
                        {(provided) => (
                          <>
                            <div className='tablas' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                              <section className='tablero_table_header' >
                                <p>{table.nombre}</p>
                              </section>
                              
                              <div className='tablero_table_body'>
                               
                                {
                                  tareas.map((tarea,index) => {
                                    if(tarea.FK_ID_Tabla == table._id){
                                      return(
                                      
                                        <section className='tablero_table_task'>
                                          <p onClick={calcularPosition}>{tarea.nombre} <span className='taskArrowIcon'>🔽</span></p>
                                        </section>
                                    
                                      )

                                    }
                                  })
                                }
                                
                                <section className='tablero_table_task_form'>  
                                  <button onClick={showForm} className='btn_desplegable'>+ Añadir Tarea</button>
                                  <form id={table._id} onSubmit={postTareas}>
                                    <textarea className='taskArea' required data-autosize="true" placeholder='Añadir Titulo de la Tarea'></textarea>
                                    <div className='formTaskButtons'>
                                      <button className='btn_formTask' type='submit'>Crear Tarea</button>
                                      <button onClick={closeForm} className='btn_formTask'>❌</button>
                                    </div>
                                  </form> 
                                </section>
                              </div>
                            </div>
                          </>
                        )}
                       
                      </Draggable>
                    )
                  })
                }
                
                <form className='tablero_form' onSubmit={submitTabla}>
                  <button type='submit'>+</button>
                  <input onChange={changeName} value={changeNameTable} placeholder='TO DO ...' required type="text" />
                </form>
            </div>
          )}
        
        </Droppable>

      </DragDropContext>
      
      {
        stateQuickCard ? <>

                            <div className='quickCard' onClick={removeQuickCard}>
                            
                            </div>
                            <div style={{zIndex:"11",position:"absolute",top:"0", left:"0"}}>
                              <textarea onChange={(event) => { setValueQuickCard(event.target.value) }} 
                                        className='taskArea' 
                                        style={positionCard} value={valueQuickCard}>

                              </textarea>
                            </div> 
                          </>
                         
                         : 
                          
                          ""
      }
    </>
  )
}

export default App
