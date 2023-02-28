// MOVE PEON WHITE
export const moveWhitePeon = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn, firstMoveWhite,setFirstMoveWhite,setTurn,turn,copyBoardList) =>{
    

    if(dragOverItemFila.current == dragItemFila.current + 2 && firstMoveWhite && dragOverItemColumn.current == dragItemColumn.current){    
        setFirstMoveWhite(false)
        setTurn(!turn)
        return dragOverItemColumn = dragOverItemColumn.current
    }else if(dragOverItemFila.current == dragItemFila.current + 1 && dragOverItemColumn.current == dragItemColumn.current 
        && copyBoardList[dragOverItemFila.current][dragOverItemColumn.current]== null){

        setTurn(!turn)
        setFirstMoveWhite(false)
        return dragOverItemColumn = dragOverItemColumn.current 
    }
    
    if(dragOverItemColumn.current == dragItemColumn.current + 1 || dragOverItemColumn.current == dragItemColumn.current - 1 && dragOverItemFila.current == dragItemFila.current + 1 && copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] != null){
        setTurn(!turn)
        return dragOverItemColumn = dragOverItemColumn.current
    }
    
}

// MOVE PEON BLACK

export const moveBlackPeon = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn, firstMoveBlack, setFirstMoveBlack,setTurn,turn,copyBoardList) => {   

    if(dragOverItemFila.current == dragItemFila.current - 2 && firstMoveBlack && dragOverItemColumn.current == dragItemColumn.current){
        setTurn(!turn)
        setFirstMoveBlack(false)
        return dragOverItemColumn = dragOverItemColumn.current
    }else if(dragOverItemFila.current == dragItemFila.current - 1 && dragOverItemColumn.current == dragItemColumn.current 
        && copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == null){
            console.log("dentro")
        setTurn(!turn)
        setFirstMoveBlack(false)
        return dragOverItemColumn = dragOverItemColumn.current
    }

    if(dragOverItemColumn.current == dragItemColumn.current + 1 || dragOverItemColumn.current == dragItemColumn.current - 1 && dragOverItemFila.current == dragItemFila.current - 1 && copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] != null){
        setTurn(!turn)
        return dragOverItemColumn = dragOverItemColumn.current
    }
     
}


// FUNCION MOVE ALFIL
export const moveAlfil = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn) => {
    if(dragOverItemFila.current != dragItemFila.current && 
        dragItemColumn.current != dragOverItemColumn.current
      ){
         if((dragItemColumn.current + ( dragOverItemFila.current - dragItemFila.current)) == dragOverItemColumn.current){
            setTurn(!turn)
            return dragOverItemColumn = dragOverItemColumn.current
         }else if((dragItemColumn.current - ( dragOverItemFila.current - dragItemFila.current)) == dragOverItemColumn.current){
            setTurn(!turn)
            return dragOverItemColumn = dragOverItemColumn.current
         } 
     }  
} 

// FUNCTION MOVE TOWER
export const moveTower = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn) => {
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
        setTurn(!turn) 
        return dragOverItemColumn = dragOverItemColumn.current   
    }
    
}

// FUNCTION MOVE QUEEN
export const moveQueen = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn) => {
    if(dragOverItemFila.current != dragItemFila.current && 
        dragItemColumn.current != dragOverItemColumn.current
      ){
        
        return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn)
      }else{
        

        return moveTower(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn)
      }

}

// FUNCTION MOVE KING
export const moveKing = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn) => {
    
    if(dragItemFila.current + 1 == dragOverItemFila.current){

        if(dragItemColumn.current + 1 == dragOverItemColumn.current || 
           dragItemColumn.current - 1 == dragOverItemColumn.current ||
           dragItemColumn.current == dragOverItemColumn.current){
                setTurn(!turn)
                return dragOverItemColumn = dragOverItemColumn.current
        }

    }else if(dragItemFila.current - 1 == dragOverItemFila.current){

        if(dragItemColumn.current + 1 == dragOverItemColumn.current || 
           dragItemColumn.current - 1 == dragOverItemColumn.current ||
           dragItemColumn.current == dragOverItemColumn.current){
                setTurn(!turn)  
                return dragOverItemColumn = dragOverItemColumn.current
        }
    }

    if(dragItemColumn.current + 1 == dragOverItemColumn.current && dragItemFila.current == dragOverItemFila.current){
        setTurn(!turn)
        return dragItemColumn = dragOverItemColumn.current
    }else if( dragItemFila.current == dragOverItemFila.current && dragItemColumn.current - 1 == dragOverItemColumn.current){
        setTurn(!turn)
        return dragItemColumn = dragOverItemColumn.current
    }  
}

// FUNCTION MOVE Horse
export const moveHorse = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn) => {
    
    if(dragItemFila.current + 1 == dragOverItemFila.current || dragItemFila.current - 1  == dragOverItemFila.current){
        if(dragOverItemColumn.current == dragItemColumn.current + 2 || dragOverItemColumn.current == dragItemColumn.current - 2){
            setTurn(!turn)
            return dragOverItemColumn = dragOverItemColumn.current
        }
    }else if(dragItemFila.current + 2 == dragOverItemFila.current || dragItemFila.current - 2  == dragOverItemFila.current){
        if(dragOverItemColumn.current == dragItemColumn.current + 1 || dragOverItemColumn.current == dragItemColumn.current -1){
            setTurn(!turn)
            return dragOverItemColumn = dragOverItemColumn.current
        }
    }
}