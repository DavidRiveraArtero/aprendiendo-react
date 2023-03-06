
export function WinComp({win,turn,setWin}){



    if(win == null){
        return
    }
    const winner = !turn ? "Blancas" : "Negras"

    const resetGame = () => {
        setWin()
        console.log(win)
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