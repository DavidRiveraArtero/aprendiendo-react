import { useState, useRef } from 'react'
import './App.css'

import { BoardComponent } from './components/board/boardComponent'
import { Play_menu } from './components/play_board_menu/play_menu'
import { TimeBoard } from './components/timeBoard/timeBoard'
import { comprobarPieza } from './logic/movePice'
import { replacePosition } from './logic/replacePosition'
import { WinComp } from './components/winComp'

function App() {
 

  const [turn,setTurn] = useState(true)
  const [win,setWin] = useState(null)
 
  const piezasBlanc = ['♙','♖','♗','♕','♔','♘']
  const piezasNegras = ['♟','♜','♞','♛','♚','♝']


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
  const [firstMoveBlack, setFirstMoveBlack] = useState(true)

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
    const copyBoardListCheck = [...board2]
    const dragItemContent = copyBoardList[dragItemFila.current][dragItemColumn.current]
    
    // SI queremos mover todas las fichas sin ninguna regla eliminar esta linea
    dragOverItemColumn.current = comprobarPieza(dragItemContent,dragOverItemColumn,dragItemColumn,copyBoardList,firstMoveWhite,setFirstMoveWhite,dragOverItemFila,dragItemFila,turn,setTurn, firstMoveBlack, setFirstMoveBlack, piezasBlanc, piezasNegras) // PRUEBA
    
    setBoard2(()=>{
      
      const newCopyBoardList = replacePosition(copyBoardList,dragItemColumn, dragItemFila, dragOverItemColumn, dragOverItemFila, piezasBlanc, piezasNegras,dragItemContent,turn,setTurn)
      setWin(() => {
        return newCopyBoardList[1]
      })
      
      return newCopyBoardList[0]
    })

  }

  
  

  return (
    <>
      <Play_menu></Play_menu>
      <WinComp win={win} turn={turn} setWin={setWin}/>
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
                                  piezasNegras={piezasNegras}
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
