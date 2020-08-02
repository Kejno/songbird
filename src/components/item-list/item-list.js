import React, { Component } from 'react';
import birdData from '../../services/birdsData'
import './item-list.css';

export default class ItemList extends Component {

  render() {
    const { items, onClickHandle } = this.props;
    const cls = "list-group-item"

    return (
      <ul className="item-list list-group">
        {items.map((item) => {
          const { id, status } = item;
          return (
            <li className={
              item.status
                ? `${cls} ${status}`
                : cls
            }
              key={id} id={id}
              onClick={() => onClickHandle(id)}>
              <span className="li-btn"></span>
              {item.name}
            </li>
          )
        }
        )
        }

      </ul >
    );
  }
}