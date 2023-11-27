import {
    AUTH_ICON,LOGIN_USER
} from '../_actions/type';

export default function(state = {} , action){
    switch (action.type) {
        case AUTH_ICON:
            return {...state, user_riot_info: action.payload}
            break;
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
            break;
        default:
            return state;
    } 

}