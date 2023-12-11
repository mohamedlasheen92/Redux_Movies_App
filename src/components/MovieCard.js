import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movieDetails }) {



  return (

    <>

      {
        movieDetails.poster_path && (

          <div className='col'>

            <Link to={`/details/${movieDetails.id}`}>


              <div className='movieCard h-100'>

                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />

                <div className='data position-absolute'>
                  <h4 className='text-center fs-4 fw-bold mb-4'>{movieDetails.title}</h4>
                  <p>Release Date: {movieDetails.release_date}</p>
                  <p>Vote Count: {movieDetails.vote_count}</p>
                  <p>Vote Average: {movieDetails.vote_average}</p>

                </div>

              </div>

            </Link>



          </div>

        )
      }



    </>
  )
}
