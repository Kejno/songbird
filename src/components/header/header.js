import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <h3 className="logo">Sogbirds</h3>
        <div className="score">Score:
        <span>4</span>
        </div>
      </div>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link">People</a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">Planets</a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;