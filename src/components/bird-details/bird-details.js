import React, { Component } from 'react';
import birdsData from '../../services/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import './bird-details.css';

export default class PersonDetails extends Component {

  render() {
    return (
      <div className="bird-details card">

        <p className="instruction" style={{ display: 'none' }}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка...</span>
        </p>
        <div className="card-body">
          <img className="bird-image"
            src={birdsData[0][0].image} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdsData[0][0].name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdsData[0][0].species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer
                src={birdsData[0][0].audio}
                onPlay={e => console.log("onPlay")}
              // other props here
              />
            </li>
          </ul>
        </div>
        <span className="bird-description">
          {birdsData[0][0].description}
        </span>
      </div>
    )
  }
}
