import { useState } from 'react'
import './App.css'
import { BoardComponent } from './components/board/boardComponent'

function App() {
  const [board, setBoard] = useState(new Array(64).fill(null,0,8).fill('♙',8,16).fill(null,16,48).fill('♟',48,56).fill(null,56,64))
  // Blanca ♟ Negra ♟
    
  return (
    <>
      <section>
        
      </section>
      <main className='board'>
        <section className='game'>
          {
            board.map((_,index) =>{
              return(
                <BoardComponent index={index} board={board}></BoardComponent>
              )  
            }) 
          }
        </section>
      </main>   
    </>
  )
}

export default App
