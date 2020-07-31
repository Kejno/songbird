import React, { Component } from 'react';
import { randomNum } from '../../services/functions'
import birdsData from '../../services/birdsData'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import BirdDetails from '../bird-details';

import './app.css';
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    count: 0,
    rightId: 0,
    answerState: null,
    answerId: null,
  }

  componentDidMount() {
    const allItemInQuiz = birdsData[this.state.count].length - 1;
    const randomIndex = randomNum(allItemInQuiz);
    this.setState({ rightId: birdsData[this.state.count][randomIndex].id })
  }

  onClickHandle = (event) => {
    const { rightId, count } = this.state;
    const answerId = +event.target.id;
    this.setState({ answerId: +event.target.id })
    if (answerId === rightId) {
      this.setState({
        answerState: { [answerId]: 'success' }
      })

      const timeout = window.setTimeout(() => {
        this.setState({ count: count + 1, answerState: null })

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: { [answerId]: 'error' }
      })
    }

  }
  render() {
    const { answerState, count, answerId, rightId } = this.state;
    return (
      <div className="app-container">
        <Header />
        <RandomPlanet
          answerState={answerState}
          answerId={answerId}
          count={count}
          rightId={rightId}
        />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onClick={this.onClickHandle}
              answerState={answerState}
              count={count}
              answerId={answerId}
            />
          </div>
          <div className="col-md-6">
            <BirdDetails />
          </div>
        </div>


      </div>
    )
  };
};

export default App;