export const replacePosition = (copyBoardList,dragItemColumn, dragItemFila, dragOverItemColumn, dragOverItemFila, piezasBlanc, piezasNegras,dragItemContent,turn,setTurn) => {
    
    if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == null && dragOverItemColumn.current != null){

      copyBoardList[dragItemFila.current].splice(dragItemColumn.current,1,null)
      copyBoardList[dragOverItemFila.current].splice(dragOverItemColumn.current,1,dragItemContent)
     
    }

    if(turn){
      for(var x = 0; x<piezasNegras.length;x++){
 
        if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == piezasNegras[x] && dragOverItemColumn.current != null){
          
          copyBoardList[dragItemFila.current].splice(dragItemColumn.current,1,null)
          copyBoardList[dragOverItemFila.current].splice(dragOverItemColumn.current,1,dragItemContent)

        }
      }
    }else{
      for(var x = 0; x<piezasBlanc.length;x++){
 
        if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == piezasBlanc[x] && dragOverItemColumn.current != null){
          
          copyBoardList[dragItemFila.current].splice(dragItemColumn.current,1,null)
          copyBoardList[dragOverItemFila.current].splice(dragOverItemColumn.current,1,dragItemContent)
          setTurn(!turn)
        }
      }
    }
    return copyBoardList
  }