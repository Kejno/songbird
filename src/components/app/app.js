import React, { Component } from 'react';
import { randomNum } from '../../services/functions';
import { status } from '../../services/constants'
import birdsData from '../../services/birdsData'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import BirdDetails from '../bird-details';

import './app.css';

class App extends Component {

  state = {
    count: 0,
    rightId: 0,
    answerState: null,
    answerId: null,
    isSuccess: false,
  }

  componentDidMount() {
    const allItemInQuiz = birdsData[this.state.count].length - 1;
    const randomIndex = randomNum(allItemInQuiz);
    this.setState({ rightId: birdsData[this.state.count][randomIndex].id })
  }

  onClickHandle = (event) => {

    const { rightId } = this.state;
    const answerId = +event.target.id;
    const { success, error } = status;

    this.setState({ answerId: +event.target.id })

    if (answerId === rightId) {
      this.setState({
        answerState: { [answerId]: success },
        isSuccess: true,
      })
    } else {
      this.setState({
        answerState: { [answerId]: error }
      })
    }

  }

  onButtonClick = () => {
    const { count, isSuccess } = this.state

    if (isSuccess) {
      this.setState({
        count: count + 1,
        answerState: null,
        answerId: null,
        isSuccess: false,
      })
    }
  }

  render() {
    const { answerState, count, answerId, rightId, isSuccess } = this.state;
    const { active } = status;
    return (
      <div className="container">
        <Header
          count={count}
        />
        <RandomPlanet
          answerState={answerState}
          answerId={answerId}
          count={count}
          rightId={rightId}
          isSuccess={isSuccess}
        />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onClick={this.onClickHandle}
              answerState={answerState}
              count={count}
              answerId={answerId}
              isSuccess={isSuccess}
              rightId={rightId}
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
            onClick={this.onButtonClick}
          >Next level</button>
        </div>


      </div>
    )
  };
};

export default App;