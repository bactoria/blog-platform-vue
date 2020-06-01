import Const from './constant'

export default {
    [Const.AUTH_LOGIN]: (state) => {
        state.isAuthenticated = true
    },
    [Const.AUTH_LOGOUT]: (state) => {
        state.isAuthenticated = false
    },
    [Const.UPDATE_LOGIN_USER_ID]: (state, payload) => {
        state.LOGIN_USER_ID = payload
    },
    [Const.UPDATE_LOGIN_USER_PWD]: (state, payload) => {
        state.LOGIN_USER_PWD = payload
    },

}
