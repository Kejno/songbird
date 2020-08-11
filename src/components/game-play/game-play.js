import React from 'react';
import RandomBird from '../random-bird';
import ItemList from '../item-list';
import BirdDetails from '../bird-details';

import './game-play.css';

const GamePlay = ({ answerId, count, rightId, isSuccess, onClickHandle, items, onButtonClick, active }) => {
  return (
    <React.Fragment>
      <RandomBird
        answerId={answerId}
        count={count}
        rightId={rightId}
        isSuccess={isSuccess}
      />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onClickHandle={onClickHandle}
            items={items}
          />
        </div>
        <div className="col-md-6">
          <BirdDetails
            answerId={answerId}
            count={count}
          />
        </div>

        <button
          className={`btn ${!!isSuccess && active}`}
          onClick={onButtonClick}
        >Next level</button>
      </div>
    </React.Fragment>
  )
}

export default GamePlay