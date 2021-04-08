import { createContext } from 'react'

const SongContext = createContext({
  title: '',
  artist: '',
  album: '',
  songs: [],
  handleInputChange: () => { },
  handleAddSong: () => { }
})

export default SongContext
