import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/authSlice';

// Simple login that stores username in Redux
const Login = () => {
  const [username, setUsernameInput] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username) return alert('Enter username');
    dispatch(setUsername(username));
    alert('Logged in');
  };

  return (
    <div>
      <input placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;