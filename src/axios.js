import axios from 'axios';
import * as C from './js/C'
  
/* 
FLEXIBILITY: 
Create instance if not all requests made to same URL.
Define default baseURL in index.js for common requests
and only import instance in components that make
requests to unique URL.
*/
const instance = axios.create({
  baseURL: 'http://thinkde:8000/rest'
//  baseURL: 'http://localhost:8000/rest'
});


// instance.interceptors.request...
// Override default configurations
instance.interceptors.response.use((response) => response, (error) => {
    C.erralert(error);
    throw error;
  })

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default instance;
