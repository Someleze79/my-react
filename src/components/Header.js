import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Navigation bar displayed on all pages
const Header = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/store">Store</Link> | 
        <Link to="/cart">Cart</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/login">Login</Link>
        {username && <span style={{ marginLeft: '10px' }}>Welcome, {username}!</span>}
      </nav>
    </header>
  );
};

export default Header;