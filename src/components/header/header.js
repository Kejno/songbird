import React from 'react';
import birdsData from '../../services/birdsData';
import './header.css';

const Header = ({ count, score }) => {
  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <h3 className="logo">Sogbirds</h3>
        <div className="score">Score:
        <span>{' ' + score}</span>
        </div>
      </div>
      <ul className="pagination">
        {
          birdsData.map((items, key) => {

            return (
              <HeaderItem
                category={items.family}
                key={key}
                active={count === key ? 'active' : null}
              />
            )
          })
        }

      </ul>
    </div>
  );
};

export default Header;

const HeaderItem = ({ category, active }) => (
  <li className="page-item">
    <span className={`page-link ${active}`}>{category}</span>
  </li>
)