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

    const destinationPosition = result.destination.index + 1 
    const originPosition = result.source.index + 1
    const idTableMoved = result.draggableId

    const idTableModifi = await searchPosition(destinationPosition)
    // console.log(result)
    // console.log("Destination ID",destinationPosition)
    // console.log("Origin ID",originPosition)
    // console.log("tableMoved",idTableMoved)
    // console.log("idTableModifi: ", idTableModifi)

    // FIRTS UPDATE
    fetch(URI+"/"+idTableMoved,{
        method:'PUT',
        body: JSON.stringify({
            posicion:destinationPosition
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    fetch(URI+"/"+idTableModifi,{
        method:'PUT',
        body: JSON.stringify({
            posicion:originPosition
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

}

async function searchPosition(position){
    const  resp = await fetch(URI)
    const data = await resp.json()

    for(var x = 0;x<data.length;x++){
        if(data[x].posicion == position){
            
            return data[x]._id
        }
    }

}