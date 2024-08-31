// src/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div>
      <Navbar isHomePage={false} />
      <div style={styles.container}>
        <h2>Login Page</h2>
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Login;
