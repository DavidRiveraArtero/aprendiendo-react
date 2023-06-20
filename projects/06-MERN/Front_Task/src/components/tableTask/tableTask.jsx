import { useState,useEffect } from "react"
import { callTasks,deleteTask } from "../../api/taskApi"
import 'boxicons';

export function TableTask ({setUpdateNameTask,setUpdateDescTask,setButtonClick,buttonClick,setId,submit}){

    const [tasks, setTasks] = useState([])
    const [buttonPress, setButtonPress] = useState(false)

    useEffect(() => {
        console.log("useEffect")

        const timer = setInterval(() => {
             callTasks(setTasks)
        }, 1000); // MIRAR SI ESTO ESTA BIEN 

        callTasks(setTasks)

        return () => {
            clearInterval(timer);
        }
       
    },[buttonPress,submit])

    const buttonDelete = (event) => {
        deleteTask(event.target.id)
        setButtonPress(!buttonPress)
        console.log(buttonPress)
    }

    const buttonUpdate = (event) => {
        setUpdateNameTask(event.target.parentNode.parentNode.childNodes[0].innerHTML)
        setUpdateDescTask(event.target.parentNode.parentNode.childNodes[1].innerHTML)
        setId(event.target.parentNode.parentNode.childNodes[2].childNodes[0].id)
        if(buttonClick == false){
            setButtonClick(!buttonClick)
        }
    }

    return(
        <>
            <table className='section_tasks'>
                <thead>
                    <tr className='section_tasks_task'>
                    
                        <th className='section_tasks_task_title'>Task</th>
                        <th className='section_tasks_task_title'>Description</th>
                        <th className='section_tasks_task_title'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                        return(
                            <>
                                <tr className='section_tasks_task' key={index}>
                                    <td id={task.title} key={task.title}>{task.title}</td>
                                    <td id={task.description} key={task.description}>{task.description}</td>
                                    <td key={task._id} className="icons">
                                        <box-icon key={"delete"+ task._id} onClick={buttonDelete} id={task._id} class="deleteIcon" name='trash' flip='horizontal'></box-icon>
                                        <box-icon key={"update"+ task._id} onClick={buttonUpdate} class="updateIcon" name='edit-alt' flip='horizontal'></box-icon>   
                                    </td>
                                </tr>
                            </>
                        )
                        })
                    }
                </tbody>
            </table>
        
        </>

    )
}