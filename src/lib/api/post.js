import { GET } from './apiClient'

export const fetchPosts = async (pageNum) => {
    return GET('/post', { pageNum } )
        .then(res => {
            return res.data
        })
}
