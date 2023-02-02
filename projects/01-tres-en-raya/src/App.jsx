import { useState } from "react"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinerFrom, checkEndGame } from "./logic/board"
import { Winner } from "./components/Winner"
import { PuntosJug } from "./components/puntos"
function App() {
  
  const [board, setBoard] = useState(() =>{
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  }) // CREAMOS EL TABLERO 

  const [turn, setTurn] = useState(() => {
    const turnOfLocaStorage = window.localStorage.getItem('turn')
    return turnOfLocaStorage ? turnOfLocaStorage : TURNS.X
  })

  const [win, setWin] = useState(null) // null es que no hay ganador, false es empate y true hay ganador

  const [victX, setVictX] = useState(() => {

    const victXOfLOcalStorage = window.localStorage.getItem('victX')
    return victXOfLOcalStorage ? JSON.parse(victXOfLOcalStorage) : 0
  })

  const [victO, setVictO] = useState(() => {
    
    const victOOfLOcalStorage = window.localStorage.getItem('victO')
    return victOOfLOcalStorage ? JSON.parse(victOOfLOcalStorage) : 0
  })

  // FUNCION ACTUALIZAR LA TABLA
  const updateBoard = (index) =>{
   
    // ACTUALIZAR LA TABLA
    if(board[index] || win) return

    const newBord = [...board]
    newBord[index] = turn
    setBoard(newBord)

    // SEGUNDO CAMBIAR DE TURNO 
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    // LIMPIAR Y GUARDAR LA PARTIDA
    
    localStorage.setItem('board',JSON.stringify(newBord))
    localStorage.setItem('turn',newTurn)
   
    setTurn(newTurn)

    const newWiner = checkWinerFrom(newBord,setVictX,setVictO)
    if(newWiner){
      // SUMAR VICTORIAS
      if(newWiner == 'X'){
        setVictX(() => {
          const victoriaJX = victX + 1
          console.log("Victoria del Jugador 1",victoriaJX)
          localStorage.setItem('victX',JSON.parse(victoriaJX))
          return victoriaJX
        })
      }else{
        setVictO(() => {
          const victoriaJO = victO + 1
          console.log("Victoria del Jugador 2",victoriaJO)
          localStorage.setItem('victO',JSON.parse(victoriaJO))
          return victoriaJO
        })
      }
      localStorage.removeItem('board')
      localStorage.removeItem('turn')
      setWin(newWiner)

    }else if(checkEndGame(newBord)){
      localStorage.removeItem('board')
      localStorage.removeItem('turn')
      setWin(false)

    }

  }

  const resetGame = () => {
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
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
