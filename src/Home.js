// src/Home.js
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar isHomePage={true} />
      <div style={styles.content}>
        <h1>Welcome to the Home Page!</h1>
        <p>This is where your main application content would go.</p>
      </div>
    </div>
  );
};

const styles = {
  content: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Home;
