// MOVE PEON WHITE
export const movePeon = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn, firstMoveWhite,setFirstMoveWhite,setTurn,turn,copyBoardList,pieza,setFirstMoveBlack,firstMoveBlack) =>{

    const cond = pieza == '♙' ? dragOverItemFila.current == dragItemFila.current + 2 && firstMoveWhite && dragOverItemColumn.current == dragItemColumn.current : dragOverItemFila.current == dragItemFila.current - 2 && firstMoveBlack && dragOverItemColumn.current == dragItemColumn.current
    const cond2 = pieza == '♙' ? dragOverItemFila.current == dragItemFila.current + 1 && dragOverItemColumn.current == dragItemColumn.current 
    && copyBoardList[dragOverItemFila.current][dragOverItemColumn.current]== null : dragOverItemFila.current == dragItemFila.current - 1 && dragOverItemColumn.current == dragItemColumn.current 
    && copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == null

    const cond3 = pieza == '♙' ? dragOverItemColumn.current == dragItemColumn.current + 1 || dragOverItemColumn.current == dragItemColumn.current - 1 && dragOverItemFila.current == dragItemFila.current + 1 :
    dragOverItemColumn.current == dragItemColumn.current + 1 || dragOverItemColumn.current == dragItemColumn.current - 1 && dragOverItemFila.current == dragItemFila.current - 1 

    
    if(cond){    
        
        pieza == '♙' ? setFirstMoveWhite(false) : setFirstMoveBlack(false) 
        setTurn(!turn)
        return dragOverItemColumn = dragOverItemColumn.current
    }else if(cond2){

        setTurn(!turn)
        pieza == '♙' ? setFirstMoveWhite(false) : setFirstMoveBlack(false)
        return dragOverItemColumn = dragOverItemColumn.current 
    }
    
    if(cond3){
        if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] != null){
            setTurn(!turn)
            return dragOverItemColumn = dragOverItemColumn.current
        }else{
            return
        }
       
    }
    
}


// FUNCION MOVE ALFIL
export const moveAlfil = (dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn,copyBoardList) => {
    
    

    if(dragOverItemFila.current != dragItemFila.current && dragItemColumn.current != dragOverItemColumn.current){
        
        let diagDer = 0
        let inter2 = 1
        /*
        for(var x = dragOverItemFila.current; x > 0;x--){
            
            if(x >= dragItemFila.current){

                let dia = dragOverItemColumn.current - diagDer

                if(dia > dragItemColumn.current){
                    for(var y = dia; y >= dragItemColumn.current;y--){
                        //console.log("X: ", x , "Position Y: ", y , "contenido: ", copyBoardList[x][y])
                        if(copyBoardList[x][y] != null){
                            return
                        }
                        y--
                        
                    }    
                }else{
                    for(var y = dia; y < dragItemColumn.current;y++){
                        //console.log("X: ", x , "Position Y: ", y , "contenido: ", copyBoardList[x][y])
                       
                        if(copyBoardList[x][y] != null){
                            return
                        }
                        y++
                        
                    }    
                }
                
                diagDer++
            }  
        }
        */
        for(var x = dragItemFila.current - 1; x > dragOverItemFila.current;x--){
            
            if(x >= dragOverItemFila.current){
            
                for(var y = dragItemColumn.current - inter2; y > 0;y--){
                   
                    if(copyBoardList[x][y] != null && y > dragOverItemColumn.current ){
                        
                        return     
                    }
                }
                inter2++
            }
        }
        
        

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

    // COLISION VERTICAL POSTIVO
    for(var x = dragItemFila.current + 1; x < dragOverItemFila.current; x++){
       
        if(copyBoardList[x][dragOverItemColumn.current] != null){

            return
        }
    } 
    // COLISION VERTICAL NEGATIVO
    for(var x = dragItemFila.current - 1; x > dragOverItemFila.current; x++){
       
        if(copyBoardList[x][dragOverItemColumn.current] != null){

            return
        }
    }

    // COLISION HORIZONTAL POSITIVO
    for(var x = dragItemColumn.current + 1; x < dragOverItemColumn.current; x++){
      
    
        if(copyBoardList[dragItemFila.current][x] != null){
           
            return
        }
    }

    // COLISION HORIZONTAL NEGATIVO
    for(var x = dragItemColumn.current - 1; x > dragOverItemColumn.current; x++){
      
    
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
        
        return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn,copyBoardList)
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
