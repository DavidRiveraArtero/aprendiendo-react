export function BoardComponent({index, board}){
    return(
        <div className="casilla">
            <p>{board[index]}</p>
        </div>
    )
}