// src/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isHomePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  const handleRegister = () => {
    // Navigate to Register page (implement the route later if needed)
    console.log("Navigate to register page");
  };

  return (
    <nav style={styles.navbar}>
      <h3>My Application</h3>
      {isHomePage ? (
        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      ) : (
        <button onClick={handleRegister} style={styles.button}>
          Register
        </button>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    color: 'white',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#f44336',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Navbar;
