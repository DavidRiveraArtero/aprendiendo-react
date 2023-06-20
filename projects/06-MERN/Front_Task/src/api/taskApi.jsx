export function callTasks (setTasks){
    fetch('http://localhost:3000/api/tasks')
        .then(resp => resp.json())
        .then(task => {
            console.log(task)
            setTasks(task)
    })
}

export function deleteTask(id){
    
    fetch('http://localhost:3000/api/tasks/'+id,{method:'DELETE'})
        .then(resp => resp.json())
        .then(date => {
            console.log(date)
        })
    console.log(id)
}

export function createTask(nameTask,descriptionTask){
        console.log("hoal",nameTask,descriptionTask)
        fetch('http://localhost:3000/api/tasks',{
            method:'POST',
            body: JSON.stringify({
                title:nameTask,
                description:descriptionTask
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
}

export function updateTask(id,nameTask,descriptionTask){
    fetch('http://localhost:3000/api/tasks/'+id,{
        method:'PUT',
        body: JSON.stringify({
            title:nameTask,
            description:descriptionTask
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        } 
    })
 
}