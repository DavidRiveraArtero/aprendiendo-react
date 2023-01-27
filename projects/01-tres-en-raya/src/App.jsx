import { useState } from "react"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinerFrom, checkEndGame } from "./logic/board"
import { Winner } from "./components/Winner"
import { PuntosJug } from "./components/puntos"
function App() {
  
 
  if(localStorage.getItem('board') == null){
    console.log("Cargar board")
    localStorage.setItem('board',JSON.stringify(Array(9).fill(null)))
    localStorage.setItem('turn',TURNS.X)
  }else{
    console.log("Tablero Juardado",JSON.parse(localStorage.getItem("board")))
  }
  
  
  const [board, setBoard] = useState(JSON.parse(localStorage.getItem("board"))) // CREAMOS EL TABLERO Array(9).fill(null)
  const [turn, setTurn] = useState(localStorage.getItem('turn'))
  const [win, setWin] = useState(null) // null es que no hay ganador, false es empate y true hay ganador

  const [victX, setVictX] = useState(0)
  const [victO, setVictO] = useState(0)

  // FUNCION ACTUALIZAR LA TABLA
  const updateBoard = (index) =>{
   
    // ACTUALIZAR LA TABLA
    if(board[index] || win) return

    const newBord = [...board]
    newBord[index] = turn
    setBoard(newBord)

    localStorage.removeItem('board')
    localStorage.setItem('board',JSON.stringify(newBord))

    
    // SEGUNDO CAMBIAR DE TURNO 
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    localStorage.removeItem('turn')
    localStorage.setItem('turn',newTurn)
    setTurn(newTurn)

    const newWiner = checkWinerFrom(newBord,setVictX,setVictO)
    if(newWiner){

      // SUMAR VICTORIAS
      if(newWiner == 'x'){
        setVictX(victX + 1)
      }else{
        setVictO(victO + 1)
      }

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
    <>
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

      <PuntosJug TURNS={TURNS} victO={victO} victX={victX}></PuntosJug>
    </>
  )
}

export default App
