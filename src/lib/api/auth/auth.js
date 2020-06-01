import { POST, SET_AUTH_TOKEN, DELETE_AUTH_TOKEN } from '../apiClient'

export const login = async (userId, password) => {
    const requestDto = {
        userId: userId,
        password: password
    }
    return POST('/login', requestDto)
        .then(res => {
            const token = res.headers['jwt-header']
            localStorage.setItem('jwt-token', token)
            SET_AUTH_TOKEN(token)
            return res;
        })
}

export const logout = () => {
    return DELETE_AUTH_TOKEN()
}
