export function callApi (setSumonerLevel,setSumonerName,setImgIcon,setListGame,sumonerName,listGame){

    // API
    const apiKey = "RGAPI-809b0c37-ce57-4812-a241-e64b0ce40961"
    const refApi = "https://euw1.api.riotgames.com/"
    const refRegionApi = "https://europe.api.riotgames.com/"

    const api1 = `lol/summoner/v4/summoners/by-name/${sumonerName}?api_key=${apiKey}`
    const api2 = `lol/match/v5/matches/by-puuid/hlXJzORD76w4NhNQ9dKOQPFSYqMtFw-W8Q2JHlR0dPDZm7jEasXnKos2IIj7z-TXIHbIBY7M5zbhtg/ids?type=normal&start=0&count=20&api_key=${apiKey}`


    const dataFetch = async(dateMatches) => {
        const data = await(
            await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${dateMatches}?api_key=${apiKey}`
    
            )
        ).json() 
          
        if(listGame.lenght == 0){
        
          setListGame(data.info)
        }else{
      
          setListGame( current => [...current, data.info])
        }
        
      }
      
    fetch(refApi+api1).then(resp => resp.json())
        .then(date => {
            console.log("Primera Fetch")
            setSumonerName(date.name)
            setSumonerLevel(date.summonerLevel)
        
            setImgIcon(`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${date.profileIconId}.png`)
            fetch(refRegionApi+`lol/match/v5/matches/by-puuid/${date.puuid}/ids?type=normal&start=0&count=20&api_key=${apiKey}`)
            .then(respMatches => respMatches.json())
            .then(dateMatches => {
                setListGame([])
                for(var x = 0; x<dateMatches.length - 1; x++){
                    dataFetch(dateMatches[x])
                }
            
            })
        })
}

