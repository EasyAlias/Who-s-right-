const initialState = {
    disputeId: 0,
    error: '',
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        // case 'GET_MOVIES':
        //     return {...state, movies: [...action.payload]};
        //     case 'ADD_LIST_PAGE': {
        //     const movie = state.movies.find(item => item.imdbID === action.payload);
        //     let moviesList = [...state.moviesList, movie];
        //     return {...state, moviesList};
        // }
        // case 'GET_ERROR': {
        //     return {...state, error: "Введите правильное название фильма"};
        // }
        // case 'DELETE_MOVIE': {
        //     const myMoviesList = state.moviesList.filter(item => item.imdbID !== action.payload);
        //     const moviesList = [...myMoviesList];
        //     return {...state, moviesList};
        // }
        case 'ADD_NEW_ID': {
            const disputeId = state.disputeId + 1;
            return {...state, disputeId};
        }
        default:
            return state;    
    }
}