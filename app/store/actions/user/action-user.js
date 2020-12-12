import {
  USER_DATA,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_AUTH,
  AUTH_LOADED,
} from "./action-types";

export const logginUser = (user) => {
  console.log(`USUARIOREDUX ${JSON.stringify(user)}`);
  return { type: USER_DATA, payload: user };
};

// export const loadingAuth = () => {
//     return { type: LOADING_AUTH }
// }

// export const authLoaded = () => {
//     return { type: AUTH_LOADED }
// }

// export const authUser = (user) => {
//     return async dispatch => {
//         dispatch(loadingAuth())
//         try {
//             let authUser = await new LoginService().loginServiceRequest(user)
//             dispatch(authSuccess(authUser.data))
//         } catch (error) {
//             dispatch(authError(error))
//         } finally {
//             dispatch(authLoaded())
//         }
//     }
// }

// export const authSuccess = (user) => {
//     return { type: USER_LOGGED_IN, payload: { user, loggedInSucess: true, status: 200 } }
// }

// export const authError = (error) => {
//     console.log(`errorLogin >>> ${JSON.stringify(error)}`)
//     return { type: USER_LOGGED_IN, payload: { user: error, status: 500, loggedInSucess: false } }
// }

// export const logout = () => {
//     return {
//         type: USER_LOGGED_OUT
//     }
// }
