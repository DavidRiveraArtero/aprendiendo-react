
export function WinComp({win,turn,setWin,setBoard2,tunr,setTurn}){

    if(win == null){
        return
    }
    const winner = !turn ? "Blancas" : "Negras"

    const resetGame = () => {
        setWin()
        setTurn(!turn)
        setBoard2([["♖","♘","♗","♕",'♔','♗','♘','♖'],
                  ['♙','♙','♙','♙','♙','♙','♙','♙'],
                  new Array(8).fill(null),
                  new Array(8).fill(null),
                  new Array(8).fill(null),
                  new Array(8).fill(null),
                  ['♟','♟','♟','♟','♟','♟','♟','♟'],
                  ['♜','♞','♝','♛','♚','♝','♞','♜']])
    }

    return (
        <section className='startGame'>
            <div className='startGame_buttonSection'>
                <h2>Ha ganado las {winner}</h2>
                <div className="startGame_button">
                    <button onClick={resetGame}>Reset</button>
                </div>
            </div>
        </section>
        
    )
}