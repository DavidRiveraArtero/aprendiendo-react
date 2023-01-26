import { useState } from "react"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinerFrom } from "./logic/board"
import { Winner } from "./components/Winner"

function App() {

  const [board, setBoard] = useState(Array(9).fill(null)) // CREAMOS EL TABLERO 
  const [turn, setTurn] = useState(TURNS.X)
  const [win, setWin] = useState(null) // null es que no hay ganador, false es empate y true hay ganador

  const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square != null)
  }

  // FUNCION ACTUALIZAR LA TABLA
  const updateBoard = (index) =>{
    // ACTUALIZAR LA TABLA
    if(board[index] || win) return

    const newBord = [...board]
    newBord[index] = turn
    setBoard(newBord)

    // SEGUNDO CAMBIAR DE TURNO 
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWiner = checkWinerFrom(newBord)
    if(newWiner){
      setWin(newWiner)
    }else if(checkEndGame(newBord)){
      setWin(false)
    }

  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWin(null)
    setTurn(TURNS.X)
  }
  
  return (

    <main className="board">
      <h1>Tres en raya </h1>
      <button onClick={resetGame}>Resetear</button>
      <section className="game">
        {
          board.map((_,index)=>{
            return(
              <Square key={index} index={index} updateBoard={updateBoard} turn={turn}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">

        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>
     
     <Winner win={win} resetGame={resetGame}></Winner>

    </main>

    
  )
}

export default App
