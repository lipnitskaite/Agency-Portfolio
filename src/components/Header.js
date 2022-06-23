import React from 'react';
import logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <div className='logo'>
        <img src={logo} alt='Логотип "Место"' className='logo__image' />
        <p className='logo__text'>Agency</p>
      </div>
      <nav>
        <ul className='header__nav'>
          <li className='header__nav-item'>About</li>
          <li className='header__nav-item'>Services</li>
          <li className='header__nav-item'>Pricing</li>
          <li className='header__nav-item'>Blog</li>
        </ul>
      </nav>
      <button className='button button__type_contact'>Contact</button>
    </header>
  );
}

export default Header;
