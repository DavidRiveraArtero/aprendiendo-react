import { putTarea,deletTarea } from "../api/tareas"

export function QuickCard({setStateUseEffect,stateUseEffect,positionCard,setStateQuickCard,stateQuickCard,valueQuickCard,setValueQuickCard,id}){

    
    const removeQuickCard = () => {
   
        setStateQuickCard(!stateQuickCard)
    }

    const changeTaskValue = (event) => {
        setValueQuickCard(event.target.value)
        
    }

    const putTask = (event) =>{
        event.preventDefault()
        putTarea(event.target[0].value, id)
        setStateUseEffect(!stateUseEffect)
        setStateQuickCard(!stateQuickCard)
    }

    const deleteTareas = (event) =>{
        deletTarea(id)
        setStateUseEffect(!stateUseEffect)
        setStateQuickCard(!stateQuickCard)
    }

    return(
        <>
            {
                stateQuickCard ? 
                    <>

                        <div className='quickCard' onClick={removeQuickCard}/>
                            
                            
                        <div style={{zIndex:"11",position:"absolute",top:"0", left:"0",positionCard}}>
                            <form style={positionCard} action="PUT" onSubmit={putTask}>
                                <textarea onChange={changeTaskValue} 
                                        className='taskArea' 
                                        value={valueQuickCard}>
                                </textarea>
                                <button className="buttPutTareaButton" type="submit">Guardar</button>
                            </form>
                            <section className="quicCardOptions" style={{position:"absolute",top:positionCard.top ,left:positionCard.left+285}}>
                                <button onClick={deleteTareas}>❌ ELIMINAR </button>
                            </section>
                        </div> 
                    </>
                         
                    : 
                          
                        ""
            }
        
        </>
    )
}