import axios from 'axios'


const DEV='http://localhost:9090'



const apiClient = axios.create();

apiClient.defaults.baseURL = DEV;
apiClient.defaults.withCredentials = false;
apiClient.defaults.timeout = 2000;

export const GET = (url, queryString) => {
    return apiClient
            .get(url, {
            params: queryString,
            headers: {'Accept': 'application/json'}
        });
}

export const POST = (url, requestDto) => {
    return apiClient
        .post(url, requestDto, {
            headers: {'Content-Type': 'application/json'}
        });
}

export const PUT = (url, requestDto) => {
    return apiClient
        .put(url, requestDto, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
}

export const DELETE = (url) => {
    return apiClient
        .delete(url);
}

export default apiClient;