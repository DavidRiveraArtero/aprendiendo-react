import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"


export function Film(){
    let {id} = useParams()
    const [film,setFilm] = useState([])
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=7150919f&i=${id}&plot=full`)
            .then(resp => resp.json())
            .then(film => {
               
                setFilm(film)
                

            })
    },[])

    return (
        <>
            <h1>Pelicula</h1>
            {film.Response != "False" ?
                    <section className="infoBoxFilm">
                        <img src={film.Poster} alt="" />
                        <div className="infoFilm">
                            <h2>{film.Title}</h2>
                            <p>{film.Runtime}</p>
                        </div> 
                    </section>
                    
                    : 
                    
                    <h1>Esta pelicula no existe</h1>}
        </>
    )
}