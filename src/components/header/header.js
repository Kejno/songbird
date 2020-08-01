import React from 'react';
import { categoryQuestions } from '../../services/constants';
import './header.css';

const Header = ({ count }) => {
  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <h3 className="logo">Sogbirds</h3>
        <div className="score">Score:
        <span>4</span>
        </div>
      </div>
      <ul className="pagination">
        {
          categoryQuestions.map((category, key) => (
            <HeaderItem
              category={category}
              key={key}
              active={count === key ? 'active' : null}
            />
          ))
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