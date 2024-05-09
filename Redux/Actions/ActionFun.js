import {
    SHOW_SPLASH_SCREEN,
    HIDE_SPLASH_SCREEN,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_SEARCH_QUERY
} from '../Actions/ReduxConstant'
//Showing
export const showSplashScreen = () => ({
    type: SHOW_SPLASH_SCREEN
});
// Hidden
export const hideSplashScreen = () => ({
    type: HIDE_SPLASH_SCREEN
});

// Request
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});
// Success
export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});
// Error
export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});
// Search
export const setSearchQuery = (query) => ({
    type: SET_SEARCH_QUERY,
    payload: query
});
