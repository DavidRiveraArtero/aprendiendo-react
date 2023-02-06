export const comprobarPieza = (pieza,dragOverItem,dragItem,copyBoardList,firstMoveWhite,setFirstMoveWhite) => {
    const moveH = [
                    [8,15], // -> dragItem = 9 => Su POS INICIAL   DRAGOVER -> SU POSICION FINAL
                    [16,23],
                    [24,31],
                    [32,39],
                    [40,48]
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
            let numbHor = 0
            let moreBigest = true
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
               
                if(dragItem.current >= moveH[index][0] && dragOverItem.current <= moveH[index][1]) {

                    console.log("DragOverItem: ", dragOverItem.current)
                    console.log("DragItem: ", dragItem.current)
                    console.log("MoveH: ", moveH[index])
                    
                    const resta = dragOverItem.current - dragItem.current
                    return dragOverItem.current = dragItem.current + resta    
                   
                }
                

                
            }

            if(moreBigest)
            window.alert("Esta Pieza no puede hacer ese movimiento: " + pieza)    
            return dragOverItem.current = dragItem.current
      }
}