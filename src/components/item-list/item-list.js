import React, { Component } from 'react';
import birdData from '../../services/birdsData'
import classNames from 'classnames'
import './item-list.css';

export default class ItemList extends Component {

  state = {
    count: 0
  }





  render() {
    let birdName = [];
    const { onClick, answerId, answerState, count } = this.props;
    const status = answerState ? answerState[answerId] : null;
    const cls = "list-group-item"

    birdData[count].forEach(bird => {
      birdName.push(bird.name)
    })

    return (
      <ul className="item-list list-group">
        {birdName.map((name, index) => (
          <li className={answerId === index + 1 ? `${cls} ${status}` : cls} key={index} onClick={onClick} id={index + 1}>
            <span className="li-btn"></span>
            {name}
          </li>
        )
        )}

      </ul>
    );
  }
}
