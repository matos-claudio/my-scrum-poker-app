import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_AUTH, AUTH_LOADED } from './actionTypes'
import LoginService from '../../../service/login/'

export const loadingAuth = () => {
    return { type: LOADING_AUTH }
}

export const authLoaded = () => {
    return { type: AUTH_LOADED }
}

export const authUser = (user) => {
    return async dispatch => {
        dispatch(loadingAuth())
        try {
            let authUser = await new LoginService().loginServiceRequest(user)
            console.log(`loggedInSucess ${JSON.stringify(authUser)}`)
            dispatch(authSuccess(authUser))
            //dispatch(authLoaded())
        } catch (error) {
            dispatch(authError(error))
            //dispatch(authLoaded())
        } finally {
            dispatch(authLoaded())
        }
    }
}

export const authSuccess = (user) => {
    return { type: USER_LOGGED_IN, payload: { data: user, loggedInSucess: true } }
}

export const authError = (error) => {
    return { type: USER_LOGGED_IN, payload: { data: error, loggedInSucess: false } }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}