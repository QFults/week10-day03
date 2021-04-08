import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [songState, setSongState] = useState({
    title: '',
    artist: '',
    album: '',
    songs: []
  })

  const handleInputChange = ({ target }) => {
    setSongState({ ...songState, [target.name]: target.value })
  }

  const handleAddSong = event => {
    event.preventDefault()
    const songs = [...songState.songs]
    songs.push({
      title: songState.title,
      artist: songState.artist,
      album: songState.album
    })
    setSongState({
      ...songState,
      songs,
      title: '',
      artist: '',
      album: ''
    })
  }

  return (
    <>
      <h1>Hello World!</h1>
      <form>
        <p>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            name='title'
            value={songState.title}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='artist'>artist</label>
          <input
            type='text'
            name='artist'
            value={songState.artist}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='album'>album</label>
          <input
            type='text'
            name='album'
            value={songState.album}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <button onClick={handleAddSong}>Add Song</button>
        </p>
      </form>
      <div>
        {
          songState.songs.length
            ? songState.songs.map((song, i) => <Card key={i} song={song} />)
            : null
        }
      </div>
    </>
  )
}

export default App
