const URI = "http://localhost:3000/api/tarea"

export function getTareas (setTareas){
    
    fetch(URI)
        .then(resp => resp.json())
        .then(data => {
            setTareas(data)
        })
}

export function postTarea(text,id,position){
    fetch(URI+"/"+id, {
        method:'POST',
        body:JSON.stringify({
            nombre:text,
            posicion:position+1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}


