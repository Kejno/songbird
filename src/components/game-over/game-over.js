import React from 'react';
import { allScore } from '../../services/constants';

import finishImage from '../../assets/images/finish.png';

import './game-over.css';

const GameOver = ({ score, onRepeatGameButton }) => (
  <div className="jumbotron game-over text-center">
    <h1 className="display-3">Поздравляем!</h1>
    <p className="lead">
      Вы прошли викторину и набрали
      {score}
      {' '}
      из
      {allScore}
      {' '}
      возможных баллов
    </p>
    <hr className="my-4" />
    {
      score === allScore
        ? <img className="finish-image" src={finishImage} alt="finish" />
        : <button type="button" className="btn btn-next btn-game-over" onClick={onRepeatGameButton}>Попробовать еще раз!</button>
    }
  </div>
);

export default GameOver;
