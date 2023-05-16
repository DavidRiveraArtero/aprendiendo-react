import './App.css'
import { useState,useEffect,useRef,setState } from 'react'


import { List_Game } from './components/list_games/ListGame'
import { InfoPlayer } from './components/info_player/InfoPlayer'
function App() {

  const inputRef = useRef()
  const [sumonerName, setSumonerName] = useState("DaseZero")
  const [sumonerLevel, setSumonerLevel] = useState()
  const [listGame, setListGame] = useState([{}])
  const [imgIcon, setImgIcon] = useState("")
  const [isFeching2, setIsFeching] = useState(false)

  // API
  const apiKey = "RGAPI-5bffe8b3-f697-44b0-b53b-a26989539608"
  const refApi = "https://euw1.api.riotgames.com/"
  const refRegionApi = "https://europe.api.riotgames.com/"

  const api1 = `lol/summoner/v4/summoners/by-name/${sumonerName}?api_key=${apiKey}`
  const api2 = `lol/match/v5/matches/by-puuid/hlXJzORD76w4NhNQ9dKOQPFSYqMtFw-W8Q2JHlR0dPDZm7jEasXnKos2IIj7z-TXIHbIBY7M5zbhtg/ids?type=normal&start=0&count=20&api_key=${apiKey}`


  useEffect(()=>{
    
    fetch(refApi+api1).then(resp => resp.json())
      .then(date => {
        console.log("Primera Fetch")
        setSumonerName(date.name)
        setSumonerLevel(date.summonerLevel)
        setImgIcon(`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${date.profileIconId}.png`)
        fetch(refRegionApi+`lol/match/v5/matches/by-puuid/${date.puuid}/ids?type=normal&start=0&count=20&api_key=${apiKey}`)
          .then(respMatches => respMatches.json())
          .then(dateMatches => {
            console.log("Segundo Fetch AAAAAA")
            for(var x = 0; x<dateMatches.length; x++){
              fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${dateMatches[x]}?api_key=${apiKey}`)
                .then(match => match.json())
                .then(mathdate => {
                  if(listGame.length = 0){
                    setListGame(mathdate.info)
                  }else{
                    setListGame( current => [...current, mathdate.info])
                  }
                  });
            }
            setIsFeching(true)
          })
      })
    
  },[sumonerName])

  const search = (event) =>{
    event.preventDefault()
    const value = inputRef.current.value
    setSumonerName(value)
    console.log(listGame) 
    setListGame([{}])
     
  }

  return (
    <>
      <section className='section-header'>
        <h1>API LOL</h1>
        <form className='form' onSubmit={search}>
          <input type='text' 
                name="fname" 
                placeholder='Nombre Invocador' 
                ref={inputRef}/>
          <button className='' type='submit'>Buscar</button>
        </form>
      </section>
      
      <section className='infoPlayer'>
        <InfoPlayer summonerLevel={sumonerLevel} sumonerName={sumonerName} imgIcon= {imgIcon}/>
      </section>

     <section>
        {isFeching2 == true && <List_Game listGame ={listGame}/>}
     </section>
      
      
    </>
  )
}

export default App
