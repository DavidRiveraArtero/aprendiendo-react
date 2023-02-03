export const comprobarPieza = (pieza,dragOverItem,dragItem,copyBoardList,firstMoveWhite,setFirstMoveWhite) => {
    
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
            console.log(copyBoardList[dragItem.current + 8])
            let exist = false
            let posi = 0
            for(var a = 0; a<copyBoardList.length;a++){
                // TIEN QUE SER MUTLIPLO DE 8 PARA MOVERSE 
                if(dragOverItem.current == dragItem.current + a && (a % 8) == 0 && copyBoardList[dragOverItem.current] == null){
                    for(let x = dragItem.current + 1 ; x < dragOverItem.current + 1; x++){
                       
                       if((x % 8) == 0 && copyBoardList[x + 1 ] != null){
                            console.log("X True",(x % 8) == 0)
                            console.log("X true: ", x , ": " ,copyBoardList[x])
                            console.log("X true: ", x , ": + 1 " ,copyBoardList[x + 1])
                            exist = true
                            console.log(exist)
                            posi = x
                            
                       }else{
                            console.log("X else",(x % 8) == 0)
                            console.log("X else: ", x , ": " ,copyBoardList[x])
                            console.log("X else: ", x , ": + 1 " ,copyBoardList[x+1])

                            exist = false
                       }
                    }
                } 
                
            }

            if(exist == true){
                console.log("exist")
                exist = false
                return dragOverItem.current = dragItem.current + posi
            }
            
            console.log(pieza)
            window.alert("Esta Pieza no puede hacer ese movimiento: " + pieza)    
            return dragOverItem.current = dragItem.current
      }
}