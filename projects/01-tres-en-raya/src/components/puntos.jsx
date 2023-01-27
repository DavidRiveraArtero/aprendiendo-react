export function PuntosJug({TURNS,victO,victX}){
    return(
        <section className="board puntos">
            <h1>Victorias</h1><br/>
            <h1>{TURNS.X} = <span> {victX}</span></h1>
            <h1>{TURNS.O} = <span> {victO}</span></h1>
        </section>
    )
    
}