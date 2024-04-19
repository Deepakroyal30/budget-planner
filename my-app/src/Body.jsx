import React from 'react';
import './Body.css';

function Body(props) {
  const { data2 } = props;

  const renderMovies = () => {
    return data2.map((movie, index) => {
      const movieData = Object.values(movie)[0];
      return (
        <div key={index} className="movie">
          <div className="image-container">
            <img src={movieData.imageurls} alt={movieData.moviename} />
            <div className="movie-details">
              <h2>{movieData.moviename}</h2>
              <p><h3>Release Year:</h3> {movieData.releaseyears}</p>
              <p><h3>Duration:</h3>{movieData.duration}</p>
              <p><h3>Genres:</h3> {movieData.genres}</p>
              <p><h3>Description:</h3> {movieData["movie description"]}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='main'>
      {renderMovies()}
    </div>
  );
}

export default Body;
