import { CardActions } from '@material-ui/core';
import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducers = (state = { authData: null}, action ) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return {...state, authData: CardActions?.data};
        case LOGOUT:
             localStorage.clear();
             return {...state, authData: null};

        default:
            return state;
    }
}

export default authReducers;