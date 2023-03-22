/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}?size=:size&color=:color&json=true`

export function App () {

  const [fact, setFact] = useState()

  useEffect(() => {

    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(resp => resp.json())
      .then(data => {
        const { fact } = data
        
        const firstWord = fact.split(' ', 1).join(' ') // FORMA MAS RAPIDA donde 1 sera solo la primera palabra
        const firstThreWord = fact.split(' ').slice(0,3).join(' ') // OTRA FORMA
        setFact(firstWord)
      })

  }, []) // SOLO SE EJECUTA LA PRIMERA VEZ

  return (
    <>
      <h1>Hola Mundo 2</h1>
      {fact && <p>{fact}</p>}
    </>
  )
}
