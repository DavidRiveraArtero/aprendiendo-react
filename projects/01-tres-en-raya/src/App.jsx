import { useState } from "react"
import { Square } from "./Square"
const TURNS = {
  X: 'x',
  O: 'o'
} 

const WINER_COMBO = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



function App() {


  const [board, setBoard] = useState(Array(9).fill(null)) // CREAMOS EL TABLERO 
  const [turn, setTurn] = useState(TURNS.X)
  const [win, setWin] = useState(null) // null es que no hay ganador, false es empate y true hay ganador

  const checkWiner = (boardToCheck) => {

    //Revisamos todas las combinaciones ganadoras
    for(const combo of WINER_COMBO){
      const [a, b, c] = combo
      console.log(a,b,c)
      if(boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] === boardToCheck[b] // Miramos si se repite
        && boardToCheck[a] === boardToCheck[c]){ // Lo mismo
        return boardToCheck[a]
      }
    }
    return null
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

    const newWiner = checkWiner(newBord)
    if(newWiner){
      setWin(newWiner)
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
      {
        win != null && (
          <section className="winner">
            <div className="text">
              <h2>
                 {
                  win == false ? 'Empate' : 'Gano'
                 }
              </h2>
              <header className="win">
                {win && <Square>{win}</Square>}
                
              </header>
              <footer>
                <button onClick={resetGame}>Resetear</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>

    
  )
}

export default App
