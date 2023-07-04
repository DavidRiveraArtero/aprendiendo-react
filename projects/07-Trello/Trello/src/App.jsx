import './App.css'
import { useEffect,useState } from 'react'
import { getTable, postTable } from './api/Trello_Api/Tabla'

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

  return (
    <>
      <h1>Trello Prue</h1>
      <div className='tablero'>
        {
          tables.map((table, index) => {
            return (
        
              <section className='tablero_table' key={index}>
                <p>{table.nombre}</p>
                <button>Crear Tarea</button>
              </section>
            )
          })
        }
        <form className='tablero_form' onSubmit={submitTabla}>
          <button type='submit'>+</button>
          <input onChange={changeName} value={changeNameTable} placeholder='TO DO ...' required type="text" />
        </form>
          

        
      </div>
    </>
  )
}

export default App
