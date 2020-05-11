import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_AUTH, AUTH_LOADED } from '../../actions/user/actionTypes'

const initialState = {
    user: null,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                user: action.payload
            }

        case LOADING_AUTH:
            return {
                ...state,
            }

        case AUTH_LOADED:
            return {
                ...state,
                isLoading: false
            }

        case USER_LOGGED_OUT:
            return {
                ...state,
                user: null
            }
        default: 
            return state    
    }
}

export default reducer