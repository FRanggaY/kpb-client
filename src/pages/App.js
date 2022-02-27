// import logo from './logo.svg';
import {Routes} from '../config';
// import './App.css';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

function App() {
  return (
      <Routes /> 
  );
}

export default App;