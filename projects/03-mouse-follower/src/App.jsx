import { useEffect } from 'react'

import './App.css'

function App() {

  useEffect(()=>{
    console.log("Efecto")
  })


  return (
    <h3>Mouse Follower</h3>
  )
}

export default App
