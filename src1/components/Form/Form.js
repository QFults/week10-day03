import { useContext } from 'react'
import SongContext from '../../utils/SongContext'

const Form = () => {
  const {
    title,
    artist,
    album,
    handleInputChange,
    handleAddSong
  } = useContext(SongContext)

  return (
    <form>
      <p>
        <label htmlFor='title'>title</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label htmlFor='artist'>artist</label>
        <input
          type='text'
          name='artist'
          value={artist}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label htmlFor='album'>album</label>
        <input
          type='text'
          name='album'
          value={album}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <button onClick={handleAddSong}>Add Song</button>
      </p>
    </form>
  )
}

export default Form
