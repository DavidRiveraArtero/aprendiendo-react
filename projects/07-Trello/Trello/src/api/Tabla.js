const URI = "http://localhost:3000/api/tabla"

export function getTable(setTables){
    
    fetch(URI)
        .then(resp => resp.json())
        .then(data => {
            // ORDENAR POR LA POSICION 
            
            const newOrderData = data.sort((a,b) => {
                if(a.posicion<b.posicion){
                    return -1 
                }else{
                    return 1
                }
            })

            setTables(newOrderData)
            
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

export async function updateTable(result){
   
    for(var x = 0 ; x<result.length;x++){
        
        if(result[x].posicion != x+1){
            fetch(URI+"/"+result[x]._id,{
                method:'PUT',
                body: JSON.stringify({
                    posicion:x+1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }
    }

}