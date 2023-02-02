import { useState } from "react"
export function Play_menu(){

    const [start,setStart]= useState(false)

    if(start == true) return
    const playGame = () => {
        setStart(!start)
    }

    return(
        <section className='startGame'>
            <div className='startGame_buttonSection'>
                <h2>Jugar</h2>
                <div className="startGame_button">
                    <button onClick={playGame}>Empezar</button>
                </div>
            </div>
        </section>
    )
}