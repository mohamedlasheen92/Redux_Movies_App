import axios from "axios"


export function getAllMovies() {

  return (dispatch) => {

    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9babf5b4f28a49d34fd46066f27a9455&language=en-US&page=1")
      .then((response) => {
        dispatch({
          type: "SET_MOVIES", payload: response.data.results, pageCount: 500
        })

      })


  }

}
