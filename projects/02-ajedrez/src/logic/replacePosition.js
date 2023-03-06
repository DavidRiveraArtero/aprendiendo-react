import { checkWinner } from "./checkWin"
export const replacePosition = (copyBoardList,dragItemColumn, dragItemFila, dragOverItemColumn, dragOverItemFila, piezasBlanc, piezasNegras,dragItemContent,turn) => {
    
    if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == null && dragOverItemColumn.current != null){

      copyBoardList[dragItemFila.current].splice(dragItemColumn.current,1,null)
      copyBoardList[dragOverItemFila.current].splice(dragOverItemColumn.current,1,dragItemContent)
     
    }
    const turnPieza = turn ? piezasBlanc : piezasNegras
    const deletePieza = turn ? piezasNegras : piezasBlanc
    var checkWin
    for(var x = 0; x<turnPieza.length;x++){
      if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == deletePieza[x] && dragOverItemColumn.current != null){
        checkWin = checkWinner(copyBoardList,dragOverItemFila,dragOverItemColumn,deletePieza,turn)
        
        copyBoardList[dragItemFila.current].splice(dragItemColumn.current,1,null)
        copyBoardList[dragOverItemFila.current].splice(dragOverItemColumn.current,1,dragItemContent)
      }
      
    }
    
    
    return [copyBoardList,checkWin]
  }