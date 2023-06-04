import { useState,useEffect } from "react"
export function TableTask ({nameTask}){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/tasks')
        .then(resp => resp.json())
        .then(task => {
            console.log(task)
            setTasks(task)
        })
    
    },[nameTask])


    return(
        <>
            <table className='section_tasks'>
            <tr className='section_tasks_task'>
               
                <th className='section_tasks_task_title'>Task</th>
                <th className='section_tasks_task_title'>Description</th>
            </tr>
            {
                tasks.map((task, index) => {
                return(
                    <>
                    <tr className='section_tasks_task' key={index} >
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                    </tr>
                    </>
                )
                })
            }
            </table>
        
        </>

    )
}