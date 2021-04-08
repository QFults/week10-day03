import './Card.css'

const Card = ({ song }) => {
  return (
    <div className='card'>
      <h1>Title: {song.title}</h1>
      <h2>Artist: {song.artist}</h2>
      <h3>Album: {song.album}</h3>
    </div>
  )
}

export default Card
