import React from 'react';
import './Header.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">Logo netflix</a>
      </div>
      <div className="header--user">
        <a href="/">Icone usuario</a>
      </div>
    </header>
  );
};
