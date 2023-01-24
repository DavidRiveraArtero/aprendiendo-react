import { useState } from "react"
const TURNS = {
  X: 'x',
  O: 'o'
} 


const Square = ({children, updateBoard, index, isSelected}) => {
  const className = `square ${isSelected ? 'is-selected':''}` // AQUI PONDREMOS LOS ESTILOS QUE TENDRA EL SQUARE
  
  const handleClick = () => {
    updateBoard(index)
  }
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // CREAMOS EL TABLERO 
  const [turn, setTurn] = useState(TURNS.X)
  
  // FUNCION ACTUALIZAR LA TABLA
  const updateBoard = (index) =>{
    // ACTUALIZAR LA TABLA
    if(board[index] == null){
      const newBord = [...board]
      newBord[index] = turn
      setBoard(newBord)
  
      // SEGUNDO CAMBIAR DE TURNO 
      const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
    }
  }
  
  return (
    
    <main className="board">
      <h1>Tres en raya </h1>
      <section className="game">
        {
          board.map((_,index)=>{
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
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

    </main>

    
  )
}

export default App
