import { Square } from "./Square"
export function Winner({win, resetGame}){

    if(win == null) return null
    const winnerText = win == false ? 'Empate' : 'Gano'

    return(

        <section className="winner">
        <div className="text">
            <h2>
                {winnerText}
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