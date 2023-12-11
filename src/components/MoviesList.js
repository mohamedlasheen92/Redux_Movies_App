import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { getAllMovies } from '../store/moviesAction';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { PaginationC } from './PaginationC';



export default function MoviesList() {

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getAllMovies());

  }, [])


  const movies = useSelector((store) => store.movies);



  return (
    <>


      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-1">

        {
          movies.map((movie, idx) => {
            return <MovieCard movieDetails={movie} key={idx} />
          })
        }

        {
          movies.length > 0 && (
            <PaginationC />
          )
        }


      </Row>




    </>
  )
}
