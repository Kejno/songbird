import React, { Component } from 'react';
import birdsData from '../../services/birdsData';
import AudioPlayer from 'react-h5-audio-player';
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
    return (
      <React.Fragment>
        <div className="card-body">
          <img className="bird-image"
            src={birdsData[count].data[answerId - 1].image} alt={birdsData[count].data[answerId - 1].name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdsData[count].data[answerId - 1].name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdsData[count].data[answerId - 1].species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer
                src={birdsData[count].data[answerId - 1].audio}
              />
            </li>
          </ul>
        </div>
        <span className="bird-description">
          {birdsData[count].data[answerId - 1].description}
        </span>
      </React.Fragment>
    )
  }
}