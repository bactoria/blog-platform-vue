import Const from './constant'
import { login, logout } from '../lib/api/auth/auth'

export default {
    [Const.AUTH_LOGIN]: ({ state, commit }) => {
        return login(state.LOGIN_USER_ID, state.LOGIN_USER_PWD)
            .then(res => {
                const token = res.headers['jwt-header']
                localStorage.setItem('jwt-token', token)
                commit(Const.AUTH_LOGIN, token)
                return;
            })
    },
    [Const.AUTH_LOGOUT]: ({ commit }) => {
        return new Promise((resolve, reject) => {
            logout()
            localStorage.removeItem('jwt-token')
            commit(Const.AUTH_LOGOUT)
            resolve()
        })
    }
}