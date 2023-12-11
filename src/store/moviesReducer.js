let initial = {
  movies: [],
  pageCount: 0,
}

export function moviesReducer(state = initial, action) {

  switch (action.type) {

    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        pageCount: action.pageCount
      }

    default:
      return state;

  }

}