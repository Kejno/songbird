import React, { Component } from 'react';
import birdsData from '../../services/birdsData';
import Spinner from '../spinner/spinner'

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

import './bird-details.css';

export default class BirdDetails extends Component {

  render() {
    const { answerId, count } = this.props
    return (
      <div className="bird-details card">
        {
          answerId
            ? <BirdInfo
              answerId={answerId}
              count={count}
            />
            : <Intro />
        }

      </div>
    )
  }
}

class Intro extends Component {
  render() {
    return (
      <p className="instruction" style={{ display: 'block' }}>
        <span>Послушайте плеер.</span>
        <span>Выберите птицу из списка...</span>
      </p>
    )
  }
}

class BirdInfo extends Component {
  render() {
    const { answerId, count } = this.props
    const birdItem = birdsData[count].data[answerId - 1];
    return (
      <React.Fragment>
        <div className="card-body">
          <img className="bird-image"
            src={birdItem.image} alt={birdItem.name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdItem.name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdItem.species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer
                src={birdItem.audio}
                style={{
                  width: '185px',
                  marginRight: '8px',
                }}
                customProgressBarSection={
                  [
                    RHAP_UI.PROGRESS_BAR,
                  ]
                }

                customAdditionalControls={[]}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}

              />
            </li>
          </ul>
        </div>
        <span className="bird-description">
          {birdItem.description}
        </span>
      </React.Fragment>
    )
  }
}