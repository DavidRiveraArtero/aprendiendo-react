export const comprobarPieza = (pieza,dragOverItemColumn,dragItemColumn,copyBoardList,firstMoveWhite,setFirstMoveWhite,dragOverItemFila,dragItemFila) => {

    switch (pieza){
        // CASO DE LAS PIEZAS BLANCAS
        case '♙':
            if(dragOverItemFila.current <= dragItemFila.current + 2 && firstMoveWhite && dragItemColumn.current == dragOverItemColumn.current ){
                setFirstMoveWhite(false)
                return dragOverItemColumn

            }else if(dragOverItemFila.current <= dragItemFila.current + 1 && 
                     dragItemColumn.current == dragOverItemColumn.current && 
                     dragOverItemFila.current >= dragItemFila.current){

                setFirstMoveWhite(false)
                return dragOverItemColumn = dragOverItemColumn.current

            }
             
            return null
            
        case '♖':
            // COLISION VERTICAL
            for(var x = dragItemFila.current + 1; x < dragOverItemFila.current; x++){
                if(copyBoardList[x][dragOverItemColumn.current] != null){
                    return
                }
            } 
            // COLISION HORIZONTAL
            for(var x = dragItemColumn.current + 1; x < dragOverItemColumn.current; x++){
                if(copyBoardList[dragItemFila.current][x] != null){
                   
                    return
                }
            }

            if(dragOverItemFila.current != dragItemFila.current && dragItemColumn.current != dragOverItemColumn.current){
                return
            }else{
                return dragOverItemColumn = dragOverItemColumn.current   
            }

        case '♗':
            return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn)
            
      }
}

// FUNCION REUTILIZABLE
const moveAlfil = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn) => {
    if(dragOverItemFila.current != dragItemFila.current && 
        dragItemColumn.current != dragOverItemColumn.current
      ){
         if((dragItemColumn.current + ( dragOverItemFila.current - dragItemFila.current)) == dragOverItemColumn.current){
             
             return dragOverItemColumn = dragOverItemColumn.current
         }else if((dragItemColumn.current - ( dragOverItemFila.current - dragItemFila.current)) == dragOverItemColumn.current){
            
             return dragOverItemColumn = dragOverItemColumn.current
         } 
     }  
} 