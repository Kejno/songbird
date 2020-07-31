import React, { Component } from 'react';
import birdsData from '../../services/birdsData';
import defaultBird from '../../assets/images/default-bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    defaultBirdName: '******',
  }
  render() {
    const { answerState, answerId, count, rightId } = this.props;
    const { defaultBirdName, } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="bird-image"
          src={!answerState
            ? defaultBird
            : birdsData[count][answerId - 1].image
          } alt={!!answerState && birdsData[count][answerId - 1].name} />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3 className="term">{!answerState ? defaultBirdName : birdsData[count][answerId - 1].name}</h3>
          </li>
          <li className="list-group-item">
            <div className="audio-player">
              <AudioPlayer
                src={birdsData[count][rightId].audio}
                onPlay={e => console.log("onPlay")}
              // other props here
              />
            </div>
          </li>
        </ul>
      </div>

    );
  }
}
