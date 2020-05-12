import { USER_LOGGED_IN_ROOM, USER_LOGGED_OUT_ROOM, LOADING_AUTH_ROOM, AUTH_ROOM_LOADED } from '../../actions/room/actionTypes'
import RoomService from '../../../service/room'

export const loadingRoomAuth = () => {
    return { type: LOADING_AUTH_ROOM }
}

export const loadedRoomAuth = () => {
    return { type: AUTH_ROOM_LOADED }
}

export const roomAuth = (data) => {
    return async dispatch => {
        dispatch(loadingRoomAuth())
        try {
            let authUser = await new RoomService().createOrLoginUserInTheRoom(data)
            dispatch(roomAuthSuccess(authUser.data))
        } catch (error) {
            dispatch(roomAuthError(error))
        } finally {
            dispatch(loadedRoomAuth())
        }
    }
}

export const roomAuthSuccess = (room) => {
    return { type: USER_LOGGED_IN_ROOM, payload: { room, loggedInSucess: true } }
}

export const roomAuthError = (error) => {
    return { type: USER_LOGGED_IN_ROOM, payload: { room: error, loggedInSucess: false } }
}

export const logout = () => {
    return { type: USER_LOGGED_OUT_ROOM }
}