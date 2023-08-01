import './App.css'
import { useEffect,useState } from 'react'
import { getTable, postTable,updateTable } from './api/Tabla'
import { getTareas,postTarea } from './api/tareas';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { QuickCard } from './components/quickCard';


function App() {

  const [tables, setTables] = useState([])
  const [stateUseEffect,setStateUseEffect] = useState(false)
  const [tareas,setTareas] = useState([])
  const [changeNameTable, setChangeNameTable] = useState("")
  const [stateQuickCard, setStateQuickCard] = useState(false)
  const [positionCard,setPositionCard] = useState({})
  const [valueQuickCard,setValueQuickCard] = useState("")
  const [idPostTarea, setIdPostTarea] = useState("")

  useEffect(()=>{

  
      getTable(setTables)
      
      getTareas(setTareas)
  
    
  }, [stateUseEffect])

  const changeName = (event) => {
    setChangeNameTable(event.target.value)
  }

  const submitTabla = (event) => {
    event.preventDefault()
    postTable(changeNameTable, tables.length)
    setChangeNameTable("")
    setStateUseEffect(!stateUseEffect)

  }

  function handleOnDragEnd(result){
    
    const items = Array.from(tables)
    const [reoderItems] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0,reoderItems)
    console.log(items)
    setTables(items)
    updateTable(items).then(resp => {
      setStateUseEffect(!stateUseEffect)

    })

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

    setStateUseEffect(!stateUseEffect)
       
  }

  const calcularPosition = (event) => {
    console.log(event.target.offsetLeft);
    setValueQuickCard(event.target.parentNode.innerHTML.split("<")[0])
    setIdPostTarea(event.target.parentNode.id)
    const positionX = event.target.offsetLeft-256
    const positionY = event.target.offsetTop
    setPositionCard({
      width:"275px",
      height:'100px',
      position:"absolute",
      top:positionY,
      left:positionX,

    })
    setStateQuickCard(!stateQuickCard)
  }



  return (
    <>
      <h1>Personal Trello</h1>

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
                                      
                                        <section className='tablero_table_task' key={index}>
                                          <p id={tarea._id}>{tarea.nombre} <span  onClick={calcularPosition} className='taskArrowIcon'>🔽</span></p>
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
      
      <QuickCard setStateUseEffect={setStateUseEffect} stateUseEffect={stateUseEffect} positionCard={positionCard} setStateQuickCard={setStateQuickCard} stateQuickCard={stateQuickCard} valueQuickCard={valueQuickCard} setValueQuickCard={setValueQuickCard} id={idPostTarea}/>
    
    </>
  )
}

export default App
