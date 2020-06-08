import { USER_LOGGED_IN_ROOM, USER_LOGGED_OUT_ROOM, LOADING_AUTH_ROOM, AUTH_ROOM_LOADED } from '../../actions/room/actionTypes'

const initialState = {
    room: null,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN_ROOM:
            return {
                ...state,
                room: action.payload
            }

        case LOADING_AUTH_ROOM:
            return {
                ...state,
                isLoading: true,
            }

        case AUTH_ROOM_LOADED:
            return {
                ...state,
                isLoading: false
            }

        case USER_LOGGED_OUT_ROOM:
            return {
                ...state,
                room: null
            }
        default: 
            return state    
    }
}

export default reducer