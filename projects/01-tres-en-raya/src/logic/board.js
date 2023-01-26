import { WINER_COMBO } from "../constants"

export const checkWinerFrom = (boardToCheck) => {

    //Revisamos todas las combinaciones ganadoras
    for(const combo of WINER_COMBO){
      const [a, b, c] = combo
      if(boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] === boardToCheck[b] // Miramos si se repite
        && boardToCheck[a] === boardToCheck[c]){ // Lo mismo
        return boardToCheck[a]
      }
    }
    return null
}