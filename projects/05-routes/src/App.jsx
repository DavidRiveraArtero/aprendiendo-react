import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './App.css'
import { ApiFilm } from './api/filmApi'
import { Home } from './components/home/home'
import { About } from './components/about/about'
import { Film } from './components/film/film'


function App() {
  

  const [films,setFilms] = useState([])
  const [inputFilm,setInputFilm] = useState('') // LO QUE BUSCAMOS AL FINAL
  const [search,setSearch] = useState('') // INPUT
  const navigate = useNavigate()
  useEffect(()=> {
    ApiFilm(setFilms,search)
      
  },[inputFilm])

  const submit = (event)=> {
    event.preventDefault()
    
    setInputFilm(search)
    navigate("/")
  }

  const searchChange = (event) =>{
   
    setSearch(event.target.value) 
  }

  return (
    <>
      <header>
        <section className='headerLogoSearch'>
          <h1>LOGO</h1>
          <form onSubmit={submit}>
            <input placeholder='Avenger, Hulk,etc ...' 
            type='text'
            onChange={searchChange}
            value={search}/>
          </form>
        </section>
        <nav className='headerNavegarion'>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>

        </nav>
      </header>
    
        <Routes>
          <Route path="/" element={<Home films={films}/>}></Route>
          <Route path="*" element={<Home films={films}/>}></Route>
          <Route path='/film/:id' element={<Film />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      
    
    </>
  )
}

export default App
