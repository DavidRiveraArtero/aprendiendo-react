import { useEffect, useState } from "react"


export function TimeBoard(){
    const [time,setTime] = useState(0)
    useEffect(()=>{
        
    },[time])
    return (
        <>
            <section className='temporizador_Tiempo'>
                <h2>Temporizador</h2>
                <p>Tiempo {time}</p>
            </section>   
        </>
    )
}