export function ListImg({part,summonerName}){
    const items = "http://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/"
    const character = "http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/"
    const list = [part.item0,part.item1,part.item2,part.item3,part.item4,part.item5,part.item6]

    const css = part.summonerName == summonerName ? 'character' : ''
    
    return (
        <div>
            <div className='box_information_character' >
                <div className="text_summonerName">
                    {part.championName != "FiddleSticks" ? 
                                        <img className={css} src={character + part.championName + ".png"} /> 
                                            : 
                                        <img className={css} src={character + "Fiddlesticks.png"} />}
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <p>{part.summonerName}</p>
                        <p>({part.kills} / {part.deaths} / {part.assists})</p>
                    </div>
                </div>
                <div className="box_img_item" >
                    {
                        list.map((foto,index)=>{
                            return(
                                <>
                                   {foto != '0' ? 
                                    <img src={items+foto+".png"} alt={part.item0}/> 
                                    : 
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/45/White_box_55x90.png' alt={part.item0}/>}
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    
}

