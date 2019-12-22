// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isAuthenticated: false,
    isFetching:      false,
    isInitialized:   false,
    errorMessage:    '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set('isFetching', false);
        case types.INITIALIZE:
            return state.set('isInitialized', true);
        case types.AUTHENTICATE:
            return state.set('isAuthenticated', true);
        case types.SET_ERROR_MESSAGE:
            return state.set('errorMessage', action.payload);
        default:
            return state;
    }
};
