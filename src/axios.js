import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/ama-zone/us-central1/api' //API (cloud function) URL goes here
});

export default instance;