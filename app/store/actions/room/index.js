import { USER_LOGGED_IN_ROOM, USER_LOGGED_OUT_ROOM, LOADING_AUTH_ROOM, AUTH_ROOM_LOADED } from '../../actions/room/actionTypes'
import RoomService from '../../../service/room'

export const loadingRoom = () => {
    return { type: LOADING_AUTH_ROOM }
}

export const loadedRoom = () => {
    return { type: AUTH_ROOM_LOADED }
}

export const roomAuth = (data) => {
    return async dispatch => {
        dispatch(loadingRoom())
        try {
            let result = await new RoomService().createOrLoginUserInTheRoom(data)
            dispatch(requestSuccess(result.data))
        } catch (error) {
            dispatch(requestError(error))
        } finally {
            dispatch(loadedRoom())
        }
    }
}

export const createStorieInTheRoom = (data) => {
    return async dispatch => {
        dispatch(loadedRoom())
        try {
            let result = await new RoomService().createStorieInTheRoom(data)
            dispatch(requestSuccess(result.data))
        } catch (error) {
            dispatch(requestError(error))
        } finally {
            dispatch(loadedRoom())
        }
    }
}

export const requestSuccess = (room) => {
    return { type: USER_LOGGED_IN_ROOM, payload: { room, loggedInSucess: true } }
}

export const requestError = (error) => {
    return { type: USER_LOGGED_IN_ROOM, payload: { room: error, loggedInSucess: false } }
}

export const roomLogout = () => {
    return { type: USER_LOGGED_OUT_ROOM }
}