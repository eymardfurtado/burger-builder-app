import axios from 'axios';

const instance = axios.create({
    // enter the url for firebase
    baseURL: 'firebase...'
});

export default instance;