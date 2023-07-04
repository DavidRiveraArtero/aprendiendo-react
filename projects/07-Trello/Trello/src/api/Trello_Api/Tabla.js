const URI = "http://localhost:3000/api/tabla"
export function getTable(setTables){
    
    fetch(URI)
        .then(resp => resp.json())
        .then(data => {
            setTables(data)
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