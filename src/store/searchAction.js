import axios from "axios"

export function searchAction(word) {

  return async (dispatch) => {

    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9babf5b4f28a49d34fd46066f27a9455&include_adult=false&language=en-US&page=1&query=${word}`)

    dispatch({ type: 'SET_MOVIES', payload: response.data.results, pageCount: response.data.total_pages });

  }

}