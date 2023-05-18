import './listGame.css'
import { ListImg } from './listImg'
export function List_Game({listGame,sumonerName}){

    return (
        <>
            <h1>Infor Partida</h1>
            {
       
                listGame.map((info,index) => {
                 
                    return (
                        <>
                            <div className="accordion box_list" id="according">
                                <h2 class="accordion-header box_list_header" id="headingOne">
                                    <button className="accordion-button" 
                                            type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target={"#"+info.gameName} 
                                            aria-expanded="false" 
                                            aria-controls="collapseOne">

                                        <p>{sumonerName}<span className="lowerCase"> ({info.gameMode})</span></p>

                                    </button>
                                </h2>
                                <div id={info.gameName} 
                                     className="accordion-collapse box_list_info collapse" 
                                     aria-labelledby="headingOne" 
                                     data-bs-parent="#accordionExample">
                                
                                    <article className="list_game">
                
                                        <section className="team1">
                                            {
                                                info.participants.map((part,indexPart) => {
                                                    if(indexPart<=4){

                                                    return (
                                      
                                                       <ListImg part={part} summonerName={sumonerName}/>
                                                           
                                                    )
                                                    }
                                                })
                                                
                                            }
                                        </section>

                                        <section className="team2">
                                            {
                                                
                                                info.participants.map((part,indexPart) => {
                                                    if(indexPart>=5){

                                                        return (
                                                            <>
                                                                <ListImg part={part} sumonerName={sumonerName}/>
                                                            </>
                                                        )
                                                    }
                                                })
                                                
                                            }
                                    
                                        </section>
                                    </article>
                                
                                </div> 
                            </div>     
                            
                        </>
                    )
                })
            }


        </>
    )
}