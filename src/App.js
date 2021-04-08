import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [movieState, setMovieState] = useState({
    title: '',
    movie: {}
  })

  const handleInputChange = ({ target }) => {
    setMovieState({ ...movieState, [target.name]: target.value })
  }

  const handleSearchMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieState.title}`)
      .then(({ data: movie }) => {
        setMovieState({ ...movieState, movie, title: '' })
      })
      .catch(err => console.error(err))
  }
  return (
    <>
      <form>
        <p>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            name='title'
            value={movieState.title}
            onChange={handleInputChange}
          />
        </p>
        <button onClick={handleSearchMovie}>Search Movie</button>
      </form>
      <div>
        <h1>Title: {movieState.movie.Title}</h1>
        <p>Plot: {movieState.movie.Plot}</p>
      </div>
    </>
  )
}

export default App
