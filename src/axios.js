import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-ama-zone.cloudfunctions.net/api' //API (cloud function) URL goes here
  // http://localhost:5001/ama-zone/us-central1/api
});

export default instance;