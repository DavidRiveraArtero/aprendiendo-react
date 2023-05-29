import './listGame.css'
import { ListImg } from './listImg'
export function List_Game({listGame,sumonerName}){
    const character = "http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/"

    return (
        <>
            <h1>Game History</h1>
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

                                        <div>
                                            {
                                                info.participants.map((part,index)=>{
                                                    
                                                    let css = part.win ? " win" : ' lost'
                                                    if(part.summonerName == sumonerName){
                                                        return(
                                                            <>  
                                                                <section className='sectionScore'>
                                                                    {part.championName != "FiddleSticks" ? <img style={{width: '50px'}} src={character + part.championName + ".png"} key={part.gameId}/> : <img style={{width: '50px'}} src={character + 'Fiddlesticks' + ".png"} key={part.gameId}/>}
                                                                    <p className='lvl'>{part.champLevel}</p>
                                                                    <p className={css+ ' statusGame'}>{part.win ? "Win" : "Lost"}</p>
                                                                    <p className='kda'>({part.kills} / {part.deaths} / {part.assists})</p>
                                                                   

                                                                </section>
                                                                <section className='sectionGameMode'>
                                                                    <p>{info.gameMode}</p>
                                                                </section>
                                                               
                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>

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