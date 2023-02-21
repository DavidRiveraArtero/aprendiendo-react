import { useState,useRef } from 'react'
import './App.css'
import { BoardComponent } from './components/board/boardComponent'
import { Play_menu } from './components/play_board_menu/play_menu'
import { TimeBoard } from './components/timeBoard/timeBoard'
import { comprobarPieza } from './logic/movePice'

function App() {
 
  const [vid_blancas,setVid_blancas] = useState(16)
  const [vid_negras,setVid_negra] = useState(16)

  const [board2, setBoard2] = useState([["♖","♘","♗","♕",'♔','♗','♘','♖'],
                                        ['♙','♙','♙','♙','♙','♙','♙','♙'],
                                        new Array(8).fill(null),
                                        new Array(8).fill(null),
                                        new Array(8).fill(null),
                                        new Array(8).fill(null),
                                        ['♟','♟','♟','♟','♟','♟','♟','♟'],
                                        ['♜','♞','♝','♛','♚','♝','♞','♜']]
                                        )


  // DRAG AND DROP
  const dragItemColumn = useRef()
  const dragItemFila = useRef()

  const dragOverItemFila = useRef()
  const dragOverItemColumn = useRef()
  const [firstMoveWhite, setFirstMoveWhite] = useState(true)

  const dragStart = (e, columna,fila) => {
     
      dragItemFila.current = fila
      dragItemColumn.current = columna
      
      
  }

  const dragEnter = (e, columna,fila) =>{
      dragOverItemFila.current = fila  
      dragOverItemColumn.current = columna
      
  }

  const drop = (e) =>{
    const copyBoardList = [...board2]
    const dragItemContent = copyBoardList[dragItemFila.current][dragItemColumn.current]
   
    // SI queremos mover todas las fichas sin ninguna regla eliminar esta linea
    dragOverItemColumn.current = comprobarPieza(dragItemContent,dragOverItemColumn,dragItemColumn,copyBoardList,firstMoveWhite,setFirstMoveWhite,dragOverItemFila,dragItemFila) // PRUEBA
    
    if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == null && dragOverItemColumn.current != null){
      copyBoardList[dragItemFila.current].splice(dragItemColumn.current,1,null)
      copyBoardList[dragOverItemFila.current].splice(dragOverItemColumn.current,1,dragItemContent)
     
    }

    dragItemColumn.current = null
    dragItemFila.current = null
    dragOverItemFila.current = null
    dragOverItemColumn.current = null
    setBoard2(copyBoardList)

  }

  return (
    <>
      <Play_menu></Play_menu>
      <main className='board'>
        <section className='game'>
          {
            board2.map((celda,fila) =>{
              
              return celda.map((_,columna)=> {

                return(
                  <BoardComponent key={fila+columna} 
                                  columna={columna}
                                  fila={fila} 
                                  board={board2} 
                                  dragStart={dragStart}
                                  dragEnter={dragEnter}
                                  drop={drop}/>
                )
              }) 
            }) 
          }
        </section>
      </main>
      <TimeBoard/>
    </>
  )
}

export default App
