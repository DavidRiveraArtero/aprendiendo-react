import './App.css'
import { useEffect,useState } from 'react'
import { getTable, postTable } from './api/Trello_Api/Tabla'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {

  const [tables, setTables] = useState([])
 
  const [changeNameTable, setChangeNameTable] = useState("")

  useEffect(()=>{

    let time = setTimeout(() => {
      getTable(setTables)
    }, 1000)

    return () => {
      clearTimeout(time)
    }
    
  }, [tables])

  const changeName = (event) => {
    console.log(event.target.value)
    setChangeNameTable(event.target.value)
  }

  const submitTabla = (event) => {
    event.preventDefault()
    postTable(changeNameTable, tables.length)
    setChangeNameTable("")

  }

  function handleOnDragEnd(result){
    //console.log(result)
    const items = Array.from(tables)
    const [reoderItems] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0,reoderItems)
    setTables(items)
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
                          <section className='tablero_table' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <p>{table.nombre}</p>

                          </section>
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

     

    
    </>
  )
}

export default App
