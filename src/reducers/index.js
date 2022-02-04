import {SET_MOVIES, SET_MOVIES_FAIL} from "../constants";

const defaultValue = {
    isLoadingMovies: true,
    movies: []
}

export const rootReducer = (state = defaultValue, action) => {
    switch (action.type){
        case SET_MOVIES: {
            return {
                ...state,
                isLoadingMovies: false,
                movies: action.payload
            }
        }
        case SET_MOVIES_FAIL: {
            return {
                ...state,
                isLoadingMovies: false
            }
        }
        default: {
            return state;
        }
    }
}