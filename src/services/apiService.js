import axios from "axios";
import {store} from '../store/store'

const apiRequest = async ({
    method,
    url,
    data,
    isToken = true,
}) => {

    let response = null, error = null
    let options = {
        method: method,
        url: `${import.meta.env.VITE_API_URL}/${url}`,
        headers: {
            'Accept': 'application/json',
        },
        data: data
    }
    
    if (isToken) {
        let { auth } = store.getState()
        let token = auth.userDetails.token

        options = {
            ...options,
            headers: {
                ...options.headers,
                'x-access-token': `${token}`
            }
        }
    }

    await axios(options)
        .then(res => {
            response = res
        })
        .catch(err => {
            error = err
        })

    return { response, error }
}

export { apiRequest }