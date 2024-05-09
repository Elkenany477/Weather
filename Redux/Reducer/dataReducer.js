import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_SEARCH_QUERY } from '../Actions/ReduxConstant';

const initialState = {
    data: [],
    FilteredData: [],
    loading: false,
    error: null,
    searchQuery: ""
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                FilteredData: action.payload,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;
