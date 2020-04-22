import React from 'react';
import { Link } from 'react-router-dom';
//import './App.css';

const Newnav = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> Scientists
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profiles'>Developers</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          |
          <Link to='/dashboard' title='Dashboard'>
            <i className='fas fa-user'></i>
            <span className='hide-sm'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='login.html' title='Logout'>
            <i className='fas fa-sign-out-alt'></i>
            <span className='hide-sm'>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Newnav;
