import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import birdsData from '../../services/birdsData';
import { defaultNameToQuestion } from '../../services/constants'

import 'react-h5-audio-player/lib/styles.css';
import './random-planet.css';

import defaultBird from '../../assets/images/default-bird.jpg';

export default class RandomPlanet extends Component {

  render() {
    const { answerState, count, rightId, isSuccess } = this.props;

    const birdItem = birdsData[count].data[rightId];
    console.log('rightId', rightId)
    return (
      <div className="random-planet jumbotron rounded">
        <img className="bird-image"
          src={isSuccess ? birdItem.image : defaultBird} alt={answerState ? birdItem.name : 'default'} />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3 className="term">{isSuccess ? birdItem.name : defaultNameToQuestion}</h3>
          </li>
          <li className="list-group-item">
            <div className="audio-player">
              {

                <AudioPlayer
                  src={birdsData[count].data[rightId].audio}
                  layout="horizontal-reverse"
                  customVolumeControls={[]}
                  customAdditionalControls={[]}
                  showJumpControls={false}
                  autoPlayAfterSrcChange={false}
                />
              }

            </div>
          </li>
        </ul>
      </div>

    );
  }
}
