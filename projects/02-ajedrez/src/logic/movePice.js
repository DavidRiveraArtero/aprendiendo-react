export const comprobarPieza = (pieza,dragOverItem,dragItem,copyBoardList,firstMoveWhite,setFirstMoveWhite) => {
    const moveH = [
                    [8,15], // -> dragItem = 9 
                    [16,23],
                    [24,32],
                    [33,40],
                    [41,48]
                   ]
    switch (pieza){
        // CASO DE LAS PIEZAS BLANCAS
        case '♙':
            
            if(dragOverItem.current == (dragItem.current + (8 * 2)) && firstMoveWhite){
                setFirstMoveWhite(false)
                return dragOverItem.current = dragItem.current + 16
            } else if(dragOverItem.current == dragItem.current + 8){
                setFirstMoveWhite(false)
                return dragOverItem.current = dragItem.current + 8
            }

            window.alert("Este movimiento no esta permitido")
            return dragOverItem.current = dragItem.current
            
        case '♖':
            
            let x = 0
            for(var a = dragItem.current+1; a<=dragOverItem.current;a++){
                // TIEN QUE SER MUTLIPLO DE 8 PARA MOVERSE 
                x++
                // MOVIMIENTO VERTICAL
                if(copyBoardList[a] === null && (x % 8) == 0 && a == dragOverItem.current){
                    console.log("Vertical Move") 
                    const result = dragOverItem.current = dragItem.current + x 
                    x = 0
                    return result
                    
                }else if(copyBoardList[a] !== null && (x % 8) == 0){
                    window.alert("No puedes hacer eso")
                    return dragOverItem.current = dragItem.current
                }
            }
            // MOVIMIENTO HORIZONTAL
            for(var index = 0 ; index < moveH.length;index++){
               
                if(dragItem.current >= moveH[index][0] || dragItem.current >= moveH[index][1] && dragOverItem.current <= moveH[index][1] && (a % 8) != 0){
                    // MODIFICAR EL IF
                    if(dragOverItem.current < dragItem.current && dragOverItem.current < moveH[index][1]){
                        console.log("dentro AAA")
                        console.log(dragItem.current - dragOverItem.current)
                        return dragOverItem.current = dragOverItem.current - x
                    }
                    return dragOverItem.current = dragItem.current + x
                }
            }

            window.alert("Esta Pieza no puede hacer ese movimiento: " + pieza)    
            return dragOverItem.current = dragItem.current
      }
}