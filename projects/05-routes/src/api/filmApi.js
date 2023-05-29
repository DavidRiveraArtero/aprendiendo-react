export function ApiFilm(setFilms,search){
    const API_KEY = '7150919f'
    const rute = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`
    console.log(search)
    fetch(rute+search).then(resp => resp.json())
      .then(film => {
        console.log(film)
        if(film.Response == 'False'){
          setFilms([])
        }else{
          setFilms(film.Search)

        }
      })
}