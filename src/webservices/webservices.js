import axios from 'axios'
import * as constants from './constants'

export function configureAxios(){
    axios.defaults.baseURL = constants.BASE_URL;
    //axios.defaults.headers.common['Authorization'] = constants.API_KEY
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function fetch(url){
    return axios.get(url).then((response) => {
        return response.data
    }).catch((error) => {
        throw error
    });
}

