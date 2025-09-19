import React from 'react'
import "../css/Favorite.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCards from '../components/MovieCards'

function Favorite () {
  const {Favorites} =  useMovieContext();

  if(Favorites) {
    <div>   
      <h2 className='favorites'>Your Favorites Movies </h2>
      <div className="movies-grid">
          {Favorites.map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
          ))}
        </div>
        </div>
  }
  return (
    <div className="favorites-empty">
        <h2>No Favorites Movies Yet</h2>
        <p>start adding movies ton your favorites and they will appear here</p>
    </div>
  )
}

export default Favorite
