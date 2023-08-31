/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const prefixURL = `https://cataas.com/`
export function App () {

  const [fact, setFact] = useState()
  const [img, setImg] = useState()

  useEffect(() => {
    
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(resp => resp.json())
      .then(data => {
        const { fact } = data
        
        const firstWord = fact.split(' ')[0] // FORMA MAS RAPIDA donde 1 sera solo la primera palabra
        
        setFact(firstWord)

        fetch(`${prefixURL}/cat/says/${firstWord}?size=:size&color=:color&json=true`)
          .then(resp => resp.json())
          .then(response => {
            const {url} = response
            setImg(url)
          })
      })

  }, []) // SOLO SE EJECUTA LA PRIMERA VEZ

  return (
    <>
      <h1>Api Gatos</h1>
      {fact && <p>{fact}</p>}
      {img && <img src={`${prefixURL}${img}`} alt={`Image extracted`}/>}
    </>
  )
}