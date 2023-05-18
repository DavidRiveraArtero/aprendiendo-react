import { useState } from "react"
export function ListImg({part,summonerName}){
    const items = "http://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/"
    const character = "http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/"

    const css = part.summonerName == summonerName ? 'character' : ''
    
    return (
        <div>
            <div className='box_information_character' >
                <div className="text_summonerName">
                    {part.championName != "FiddleSticks" ? 
                                        <img className={css} src={character + part.championName + ".png"} /> 
                                            : 
                                        <img className={css} src={character + "Fiddlesticks.png"} />}
                    <p >{part.summonerName}</p>
                </div>
                <div className="box_img_item" >
                    <img src={items+part.item0+".png"} alt={part.item0} />
                    <img src={items+part.item1+".png"} alt={part.item1} />
                    <img src={items+part.item2+".png"} alt={part.item2} />
                    <img src={items+part.item3+".png"} alt={part.item3} />
                    <img src={items+part.item4+".png"} alt={part.item4} />
                    <img src={items+part.item5+".png"} alt={part.item5} />
                    <img src={items+part.item6+".png"} alt={part.item6} />
                </div>
            </div>
        </div>
    )
    
}