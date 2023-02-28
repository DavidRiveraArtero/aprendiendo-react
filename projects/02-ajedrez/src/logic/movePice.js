import { movePeon, moveAlfil, moveTower, moveQueen, moveKing, moveHorse } from "./reusableMove"
export const comprobarPieza = (pieza,dragOverItemColumn,dragItemColumn,copyBoardList,firstMoveWhite,setFirstMoveWhite,dragOverItemFila,dragItemFila, turn, setTurn,firstMoveBlack, setFirstMoveBlack) => {


    if(turn){
        
        switch (pieza){
            // CASO DE LAS PIEZAS BLANCAS
            case '♙':
              
                return movePeon(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,firstMoveWhite,setFirstMoveWhite,setTurn,turn, copyBoardList,pieza,setFirstMoveBlack,firstMoveBlack)
                
            case '♖':
                
                return moveTower(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn)
               
            case '♗':
                
                return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn,copyBoardList)
    
            case '♕':
                
                return moveQueen(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn)
                
            case '♔':
                
                return moveKing(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn)
            
            case '♘':
                
                return moveHorse(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn)
          }
    }else{  
        switch (pieza){
            
            // PIEZAS NEGRAS
            case '♟':
                
                return movePeon(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,firstMoveWhite,setFirstMoveWhite,setTurn,turn, copyBoardList,pieza,setFirstMoveBlack,firstMoveBlack)
                
            case '♜' :
                
                return moveTower(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn)
    
            case '♝' :
                
                return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn,copyBoardList)
    
            case '♛' :
             
                return moveQueen(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList,setTurn,turn)
    
            case '♚' :
              
                return moveKing(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn)
    
            case '♞' :
            
                return moveHorse(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,setTurn,turn)
    
          }
    }    
}


