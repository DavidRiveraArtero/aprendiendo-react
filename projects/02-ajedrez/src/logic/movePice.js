import { moveWhitePeon,moveAlfil, moveTower,moveQueen,moveKing } from "./reusableMove"
export const comprobarPieza = (pieza,dragOverItemColumn,dragItemColumn,copyBoardList,firstMoveWhite,setFirstMoveWhite,dragOverItemFila,dragItemFila) => {

    switch (pieza){
        // CASO DE LAS PIEZAS BLANCAS
        case '♙':
            return moveWhitePeon(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,firstMoveWhite,setFirstMoveWhite)
            
        case '♖':
            return moveTower(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList)
           
        case '♗':
            return moveAlfil(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn)

        case '♕':
            return moveQueen(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn,copyBoardList)
            
        case '♔':
            return moveKing(dragOverItemFila,dragItemFila,dragOverItemColumn,dragItemColumn)
        
            
      }
}


