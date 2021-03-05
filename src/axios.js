import axios from 'axios';

const instance = axios.create({
  baseURL: '...' //API (cloud function) URL goes here
});

export default instance;