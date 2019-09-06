import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true // => you might need this when having the users in the app 
});

export default service