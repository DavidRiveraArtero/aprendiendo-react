import { useState,useRef } from 'react'
import './App.css'
import { BoardComponent } from './components/board/boardComponent'
import { Play_menu } from './components/play_board_menu/play_menu'
import { TimeBoard } from './components/timeBoard/timeBoard'
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
                                      .fill("♜",56,57)
                                      .fill("♞",57,58)
                                      .fill('♝',58,59)
                                      .fill('♛',59,60)
                                      .fill('♚',60,61)
                                      .fill('♝',61,62)
                                      .fill('♞',62,63)
                                      .fill('♜',63,64))
  
  // DRAG AND DROP
  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = (e, position) => {
      dragItem.current = position
      console.log("DragStart",dragItem.current)
      
  }

  const dragEnter = (e, position) =>{
      dragOverItem.current = position
  }

  const drop = (e) =>{
      const copyBoardList = [...board]
      const dragItemContent = copyBoardList[dragItem.current]

      // COMPROBAR SI ESTA VACIO PARA PODER HACER LOS CAMBIOS
      if(copyBoardList[dragOverItem.current] == null){
        copyBoardList.splice(dragItem.current , 1, null)
        copyBoardList.splice(dragOverItem.current,1,dragItemContent)

      }

   
      dragItem.current = null
      dragOverItem.current = null
      setBoard(copyBoardList)

  }

  return (
    <>
      <Play_menu></Play_menu>
      <main className='board'>
        <section className='game'>
          {
            board.map((_,index) =>{
              return(
                <BoardComponent key={index} 
                                index={index} 
                                board={board} 
                                dragStart={dragStart}
                                dragEnter={dragEnter}
                                drop={drop}></BoardComponent>
              )  
            }) 
          }
        </section>
      </main>
      <TimeBoard></TimeBoard>
    </>
  )
}

export default App
