import { SHOW_SPLASH_SCREEN, HIDE_SPLASH_SCREEN } from '../Actions/ReduxConstant'

const initialState = {
    visible: true
};

const splashReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPLASH_SCREEN:
            return {
                ...state,
                visible: state.visible
            };
            break;
        case HIDE_SPLASH_SCREEN:
            return {
                ...state,
                visible: !(state.visible)
            };
            break;
        default:
            return state;
    }
};

export default splashReducer;