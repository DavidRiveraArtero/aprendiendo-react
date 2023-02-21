export const moveWhitePeon = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn, firstMoveWhite,setFirstMoveWhite) =>{
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
}


// FUNCION MOVE ALFIL
export const moveAlfil = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn) => {
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

// FUNCTION MOVE TOWER
export const moveTower = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList) => {
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
    
}

// FUNCTION MOVE QUEEN
export const moveQueen = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList) => {
    if(dragOverItemFila.current != dragItemFila.current && 
        dragItemColumn.current != dragOverItemColumn.current
      ){
       
        return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn)
      }else{
      
        return moveTower(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList)
      }

}

export const moveKing = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn) => {
    console.log("Drag over Column: ", dragOverItemColumn.current)
    console.log("Drag current Column: ", dragItemColumn.current + 1)
    if(dragOverItemColumn.current == dragItemColumn.current + 1 || dragOverItemColumn.current == dragItemColumn.current - 1 ||
       dragItemFila.current + 1 == dragOverItemFila.current || dragItemFila.current - 1 == dragOverItemFila.current){
        return dragOverItemColumn = dragOverItemColumn.current
    }
     
}