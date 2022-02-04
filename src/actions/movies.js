import axios from "axios";
import {MOVIE_URL, SET_MOVIES, SET_MOVIES_FAIL} from "../constants";

const setMovies = (payload) => ({type: SET_MOVIES, payload});
const setMoviesFail = () => ({type: SET_MOVIES_FAIL});

export const getMovies = () =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get(MOVIE_URL);
            dispatch(setMovies(data.movies));
        }catch (error){
            dispatch(setMoviesFail());
        }
    }
}