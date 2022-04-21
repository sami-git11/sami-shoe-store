import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const login = async (data, setUser) => {
  try {
    const res = await axios.post('http://localhost:3001/api/auth/login', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });
    setUser(res.data);
    localStorage.setItem('email', JSON.stringify(res.data));
  } catch (error) {
    localStorage.setItem('error', JSON.stringify(error));
  }
};

export const register = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(
      'http://localhost:3001/api/auth/register',
      data,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      }
    );
    console.log(res.data);
    localStorage.setItem('message', JSON.stringify(res.data));
    alert('Registered Successfully');
  } catch (error) {
    console.log(error);
  }
};
