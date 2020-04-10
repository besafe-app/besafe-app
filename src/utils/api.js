import axios from 'axios';

const urlHomolog = 'https://besafe-backend.herokuapp.com/api/v1';

const instance = axios.create({
  baseURL: urlHomolog
});

export default instance;
