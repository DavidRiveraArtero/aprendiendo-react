import { putTarea } from "../api/tareas"

export function QuickCard({positionCard,setStateQuickCard,stateQuickCard,valueQuickCard,setValueQuickCard,id}){

    
    const removeQuickCard = () => {
   
        setStateQuickCard(!stateQuickCard)
    }

    const changeTaskValue = (event) => {
        setValueQuickCard(event.target.value)
        
    }

    const putTask = (event) =>{
        event.preventDefault()
        console.log(event.target[0].value)
        putTarea(event.target[0].value, id)
    }

    return(
        <>
            {
                stateQuickCard ? 
                    <>

                        <div className='quickCard' onClick={removeQuickCard}/>
                            
                            
                        <div style={{zIndex:"11",position:"absolute",top:"0", left:"0"}}>
                            <form style={positionCard} action="PUT" onSubmit={putTask}>
                                <textarea onChange={changeTaskValue} 
                                        className='taskArea' 
                                        value={valueQuickCard}>
                                </textarea>
                                <button type="submit">Guardar</button>
                            </form>
                          
                        </div> 
                    </>
                         
                    : 
                          
                        ""
            }
        
        </>
    )
}