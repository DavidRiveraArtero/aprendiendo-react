import { useNavigate } from "react-router-dom"
export function Home({films}){

    const navigate = useNavigate()

    const searchFilm = (a) => {
       navigate(`/film/${a}`)
    }
    
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
                <img onClick={() => searchFilm(film.imdbID)} key={film.imdbID} src={film.Poster}/>
              </section>
            )
          }) 
        }
        </section>
        
      </>
    )
  }