import { useState } from "react"
export function List_Game({listGame}){
    let css = ""
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    


    console.log("compònent",listGame.gameCreation)
   
    return (
        <>
            <h1>Infor Partida</h1>
            {
       
                listGame.map((info,index) => {
                    return (
                        <>
                            <div className="dropdown box_list_game">
                                <article className="list_game" style={{border:"1px solid red"}}>
                
                                    <h4 key={info.gameId}>Game mode: {info.gameMode}</h4>
                                    
                                   
                                    <section>
                                        {
                                            info.participants.map((part,indexPart) => {
                                                if(indexPart<=4){

                                                return (
                                                    <>
                                                        <p>{part.summonerName}</p>
                                                    </>
                                                )
                                                }
                                            })
                                            
                                        }
                                    </section>

                                    <section>
                                        {
                                            
                                            info.participants.map((part,indexPart) => {
                                                if(indexPart>=5){

                                                    return (
                                                        <>
                                                            <p>{part.summonerName}</p>
                                                        </>
                                                    )
                                                }
                                            })
                                            
                                        }
                                
                                    </section>
                                </article>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}