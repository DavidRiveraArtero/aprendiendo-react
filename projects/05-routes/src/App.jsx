import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './App.css'
import { ApiFilm } from './api/filmApi'


function Home({films}){
  
  return (
    <>
      <h1>FILMS</h1>
      <section className='box_film'>
      {
        films.length == 0 ? console.log("No hay pelicula") :

        films.map((film,index)=>{
         
          return(
            <section className='section_film'>
              <p key={index}>{film.Title}</p>
              <img key={film.imdbID} src={film.Poster}/>
            </section>
          )
        }) 
      }
      </section>
      
    </>
  )
}


function About(){
  return(
    <>
      <h1>About</h1>
    
    </>
  )
}

function App() {
  

  const [films,setFilms] = useState([])
  const [inputFilm,setInputFilm] = useState('') // LO QUE BUSCAMOS AL FINAL
  const [search,setSearch] = useState('') // INPUT

  useEffect(()=> {
    ApiFilm(setFilms,search)
      
  },[inputFilm])

  const submit = (event)=> {
    event.preventDefault()
    setInputFilm(search)
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
          <a href='/'>Home</a>
          <a href='/about'>About</a>
        </nav>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home films={films}/>}></Route>
          <Route path="/about" element={<About/>}></Route>

        </Routes>
      </Router>
    
    </>
  )
}

export default App
