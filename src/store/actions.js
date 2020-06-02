import Const from './constant'
import { login, logout } from '../lib/api/auth'
import { fetchPosts, fetchPostDetail } from '../lib/api/post'

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
    },
    [Const.FETCH_POSTS]: async ({ commit }) => {
        const data = await fetchPosts()
        commit(Const.SET_POSTS, data.content)
    },
    [Const.FETCH_POST_DETAIL]: (_, postId) => {
        return fetchPostDetail(postId)
    },
}