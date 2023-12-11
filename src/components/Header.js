import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchAction } from '../store/searchAction';
import { getAllMovies } from '../store/moviesAction';


function Header() {

  const dispatch = useDispatch();

  const onSearch = (word) => {
    if (word === '') {
      dispatch(getAllMovies());
    } else {
      dispatch(searchAction(word));
    }

  }
  useEffect(() => {

  })



  return (
    <>

      <header>

        <Container className='flex-column flex-sm-row'>

          <input onChange={(event) => onSearch(event.target.value)} type='text' className='w-100 order-last order-sm-first' placeholder='Search..' />


          <Link to="/">
            <img src='logo.png' alt='MoviesLogo' className=' logo' />

          </Link>




        </Container>


      </header>





    </>
  )
}

export default Header