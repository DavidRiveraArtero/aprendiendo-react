const URI = "http://localhost:3000/api/tabla"
export function getTable(setTables){
    const newOrderTable = []
    fetch(URI)
        .then(resp => resp.json())
        .then(data => {
           
            for(var x = 0; x<data.length; x++){
               
                for(var y = 0;y<data.length;y++){
                    // PARA LA PRIMERA VEZ LE PONDREMOS UN DATO
                    if(newOrderTable.length == 0){
                        newOrderTable.push(data[x])
                    }
                    // PARA LAS SIGUIENTES MIRAREMOS SI ES MAS GRANDE QUE EL PROXIMO DATO
                    if(newOrderTable[y].posicion > data[x].posicion){
      
                        newOrderTable.splice(y,0,data[x])
                 
                    }
                    // EN CASO CONTRARIO AÑADIREMOS EL DATO NORMAL
                    else if(newOrderTable[y].posicion != data[x].posicion){
           
                        newOrderTable.push(data[x])
            
                    }

                    break
                }


            }

            setTables(newOrderTable)
        })
        .catch(err => {
            return err
        })
}


export function postTable(nameTable,postion){
    postion = postion + 1
    fetch(URI,{
        method:'POST',
        body: JSON.stringify({
            nombre:nameTable,
            posicion:postion
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
}