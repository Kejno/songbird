import React, { Component } from 'react';
import { randomNum, playAudio } from '../../services/functions';
import { status, multiplier, soundError, soundSuccess } from '../../services/constants'
import birdsData from '../../services/birdsData'
import Header from '../header';
import RandomBird from '../random-bird';
import ItemList from '../item-list';
import BirdDetails from '../bird-details';
import GameOver from '../game-over';
import GamePlay from '../game-play';

import './app.css';
import ReactPlayer from 'react-player';

class App extends Component {

  state = {
    count: 0,
    rightId: 0,
    multiplier,
    score: 0,
    answerId: null,
    isSuccess: false,
    isFinish: false,
    items: [],
  }

  componentDidMount() {
    this.createRightId()
    const items = this.createItems(birdsData[this.state.count].data);
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
    const allItemInQuiz = birdsData[this.state.count].data.length - 1;
    const randomIndex = randomNum(allItemInQuiz);
    const rightId = birdsData[this.state.count].data[randomIndex].id;
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
      playAudio(soundSuccess)

    } else if (!isSuccess) {
      this.onChangeMultiplier();
      playAudio(soundError)
    }
  }

  onButtonClick = () => {
    const { count, isSuccess } = this.state


    if (isSuccess && count < 5) {
      this.createRightId();
      const items = this.createItems(birdsData[count + 1].data);
      this.setState({
        count: count + 1,
        answerId: null,
        isSuccess: false,
        items,
        multiplier,
      })
    } else if (count === 5) {
      this.setState({ isFinish: true })
    }

  }

  render() {
    const { count, answerId, rightId, isSuccess, score, items, isFinish } = this.state;
    const { active } = status;

    let page;
    if (isFinish) {
      page = <GameOver
        score={score}
      />
    } else {
      page = <GamePlay
        count={count}
        items={items}
        active={active}
        rightId={rightId}
        answerId={answerId}
        isSuccess={isSuccess}
        onClickHandle={this.onClickHandle}
        onButtonClick={this.onButtonClick}
      />

    }
    return (
      <div className="container">
        <Header
          count={count}
          score={score}
        />

        {page}

      </div>
    )
  };
};

export default App;