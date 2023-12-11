import { applyMiddleware, createStore } from "redux";
import { moviesReducer } from "./moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";



const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;



