import React from 'react';
import { allScore } from '../../services/constants'

import './game-over.css';

const GameOver = ({ score, onRepeatGameButton }) => {
  return (
    <div className="jumbotron game-over">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">Вы прошли викторину и набрали {score} из {allScore} возможных баллов</p>
      <hr className="my-4" />
      <button className="btn btn-next btn-game-over" onClick={onRepeatGameButton}>Попробовать еще раз!</button>
    </div>
  )
}

export default GameOver