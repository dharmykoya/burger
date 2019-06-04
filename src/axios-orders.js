import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-63683.firebaseio.com/',
});


export default instance;