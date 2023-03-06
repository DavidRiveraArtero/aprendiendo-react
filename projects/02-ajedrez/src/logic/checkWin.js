export const checkWinner = (copyBoardList,dragOverItemFila,dragOverItemColumn,turnPieza,turn) => {
    console.log(turnPieza)
    for(var x = 0; x < turnPieza.length;x++){
        if(copyBoardList[dragOverItemFila.current][dragOverItemColumn.current] == turnPieza[4]){ 
            return true
        }
    }
   return null
}