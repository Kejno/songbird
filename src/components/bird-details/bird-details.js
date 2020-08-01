import React, { Component } from 'react';
import birdsData from '../../services/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import './bird-details.css';

export default class BirdDetails extends Component {

  render() {
    const { answerId } = this.props
    return (
      <div className="bird-details card">
        {/* <Intro /> */}
        {/* <BirdInfo /> */}

        {
          answerId
            ? <BirdInfo
              answerId={answerId}
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
    const { answerId } = this.props
    console.log(answerId)
    return (
      <React.Fragment>
        <div className="card-body">
          <img className="bird-image"
            src={birdsData[0][answerId - 1].image} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdsData[0][answerId - 1].name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdsData[0][answerId - 1].species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer
                src={birdsData[0][answerId - 1].audio}
              /* onPlay={e => console.log("onPlay")} */
              // other props here
              />
            </li>
          </ul>
        </div>
        <span className="bird-description">
          {birdsData[0][answerId - 1].description}
        </span>
      </React.Fragment>
    )
  }
}