import { useState } from 'react'
import './App.css'
import { BoardComponent } from './components/board/boardComponent'

function App() {
  const [board, setBoard] = useState(new Array(64)
                                      .fill('♖',0,1)
                                      .fill('♘',1,2)
                                      .fill('♗',2,3)
                                      .fill('♕',3,4)
                                      .fill('♔',4,5)
                                      .fill('♗',5,6)
                                      .fill('♘',6,7)
                                      .fill('♖',7,8)
                                      .fill('♙',8,16)
                                      .fill(null,16,48)
                                      .fill('♟',48,56)
                                      .fill("♖",56,57)
                                      .fill("♘",57,58)
                                      .fill('♗',58,59)
                                      .fill('♕',59,60)
                                      .fill('♔',60,61)
                                      .fill('♗',61,62)
                                      .fill('♘',62,63)
                                      .fill('♖',63,64))
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
