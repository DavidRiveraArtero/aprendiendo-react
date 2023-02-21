import { useRef } from "react"

export function BoardComponent({fila,columna,board,dragStart,dragEnter,drop}){
    let className=""
    let resu = ""
    
    let index = fila + columna - 8

    index >= 8 && index <= 15 || index >= 24 && index <= 31 || index >= 40 && index <= 47 || index >= 56 && index <= 63 
        ? resu = index % 2 == 0 ? "par" : "impar" 
        : resu = index % 2 == 0 ? "impar" : "par" 
    
    className = `casilla ${resu}`
    
    return(
        <div className={className} 
             draggable 
             onDragStart={(e) => dragStart(e, columna,fila)}
             onDragEnter={(e) => dragEnter(e, columna,fila)}
             onDragEnd={drop}>
            {board[fila][columna]}
        </div>
    )
}