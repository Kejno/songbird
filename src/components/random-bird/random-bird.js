import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import birdsData from '../../services/birdsData';
import { defaultNameToQuestion } from '../../services/constants'

import 'react-h5-audio-player/lib/styles.css';
import './random-bird.css';

import defaultBird from '../../assets/images/default-bird.jpg';

const player = React.createRef()

export default class RandomBird extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.isSuccess !== this.props.isSuccess) {
      player.current.audio.current.pause()
    }
  }

  createAudioPlayer = (audio) => (
    <AudioPlayer
      ref={player}
      src={audio}
      customAdditionalControls={[]}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
    />
  )

  render() {
    const { answerState, count, rightId, isSuccess } = this.props;
    const birdItem = birdsData[count].data[rightId - 1];

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
              {this.createAudioPlayer(birdItem.audio)}
            </div>
          </li>
        </ul>
      </div>

    );
  }
}
