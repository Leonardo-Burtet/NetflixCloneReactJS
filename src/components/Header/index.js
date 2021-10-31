import React from 'react';
import './Header.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
            alt="logo netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          {' '}
          <img
            src="https://img2.gratispng.com/20210724/qlo/transparent-speech-balloon-60fc13b83cca53.961809481627132856249.jpg"
            alt="icone usuario"
          />
        </a>
      </div>
    </header>
  );
};
