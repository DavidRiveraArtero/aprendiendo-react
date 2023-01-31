export function BoardComponent({index, board}){
    return(
        <div key={index} className="casilla">
            <p>{board[index]}</p>
        </div>
    )
}