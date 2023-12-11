import axios from "axios"

export function getPage(page) {

  return async (dispatch) => {
    const pageResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9babf5b4f28a49d34fd46066f27a9455&language=en-US&page=${page}`);

    dispatch({ type: 'SET_MOVIES', payload: pageResponse.data.results, pageCount: 500 })
  }

}