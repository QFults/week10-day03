import { useState } from 'react'
import SongContext from './utils/SongContext'
import Useless from './components/Useless'
import Card from './components/Card'

const App = () => {
  const [songState, setSongState] = useState({
    title: '',
    artist: '',
    album: '',
    songs: []
  })

  songState.handleInputChange = ({ target }) => {
    setSongState({ ...songState, [target.name]: target.value })
  }

  songState.handleAddSong = event => {
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
      <SongContext.Provider value={songState}>
        <h1>Hello World!</h1>
        <Useless />
        <div>
          {
            songState.songs.length
              ? songState.songs.map((song, i) => <Card key={i} song={song} />)
              : null
          }
        </div>
      </SongContext.Provider>
    </>
  )
}

export default App
