import { useRef } from "react"

export function BoardComponent({index, board,dragStart,dragEnter,drop}){
    let className=""
    let resu = ""
    
    index >= 8 && index <= 15 || index >= 24 && index <= 31 || index >= 40 && index <= 47 || index >= 56 && index <= 63 
        ? resu = index % 2 == 0 ? "par" : "impar" 
        : resu = index % 2 == 0 ? "impar" : "par" 

    index >=48 && index<=64 
        ? className = `casilla ${resu} colorB` 
        : className = `casilla ${resu}` 

    


    
    return(
        <div className={className} 
             draggable 
             onDragStart={(e) => dragStart(e, index)}
             onDragEnter={(e) => dragEnter(e, index)}
             onDragEnd={drop}>
            {board[index]}
        </div>
    )
}