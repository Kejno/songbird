import React, { Component } from 'react';
import { randomNum } from '../../services/functions';
import { status, multiplier } from '../../services/constants'
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
    multiplier,
    score: 0,
    answerId: null,
    isSuccess: false,
    items: [],
  }

  componentDidMount() {
    this.createRightId()
    const items = this.createItems(birdsData[0]);
    this.setState({ items })
  }

  createItems = (data) => {
    return data.map(item => {
      return {
        ...item, status: null
      }
    })
  }
  createRightId = () => {
    const allItemInQuiz = birdsData[this.state.count].length - 1;
    const randomIndex = randomNum(allItemInQuiz);
    const rightId = birdsData[this.state.count][randomIndex].id;
    this.setState({ rightId })
  }

  toggleProperty = (arr, id, propName) => {
    const { success, error } = status;
    const idx = arr.findIndex((item) => item.id === id);
    const value = this.state.rightId === id ? success : error;
    const item = { ...arr[idx], [propName]: value };
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'status');
      console.log(items)
      return { items };
    });
  };

  onChangeMultiplier = () => {
    this.setState(({ multiplier }) => ({
      multiplier: multiplier - 1,
    }));
  }

  onChangeScore = () => {
    this.setState(({ score }) => ({
      score: score + this.state.multiplier,
    }));
  }

  onClickHandle = (id) => {

    const { rightId, isSuccess } = this.state;

    !isSuccess && this.onToggleDone(id)
    this.setState({ answerId: id })

    if (id === rightId && !isSuccess) {
      this.setState({ isSuccess: true })
      this.onChangeScore()

    } else if (!isSuccess) {
      this.onChangeMultiplier();
    }
  }

  onButtonClick = () => {
    const { count, isSuccess } = this.state

    if (isSuccess) {
      this.createRightId();
      this.setState({
        count: count + 1,
        answerId: null,
        isSuccess: false,
        items: birdsData[count + 1],
        multiplier,
      })
    }
  }

  render() {
    const { count, answerId, rightId, isSuccess, score, items } = this.state;
    const { active } = status;
    return (
      <div className="container">
        <Header
          count={count}
          score={score}
        />
        <RandomPlanet
          answerId={answerId}
          count={count}
          rightId={rightId}
          isSuccess={isSuccess}
        />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onClickHandle={this.onClickHandle}
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
            onClick={this.onButtonClick}
          >Next level</button>
        </div>


      </div>
    )
  };
};

export default App;