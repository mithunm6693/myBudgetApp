import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__title'>
        <Link to="/" className='header__title'>
          <h1>Expensify</h1>
        </Link>
      </div>
    </div>
    {/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
  </header>
);

export default Header;
