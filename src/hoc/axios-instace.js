import axios from 'axios';

/*
 * Side Note: How we are in development enviroment, it must actives some tools for allows the CORS error.
 * Then, I used Allow CORS: Access-Control-Allow-Origin, a extension of Google Chrome.
 * The EndPoint used for passing json data was https://jsonplaceholder.typicode.com/posts, we can si it into the console!
*/

const instace = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

export default instace;