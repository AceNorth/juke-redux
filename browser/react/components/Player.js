import React from 'react';
import {prev, toggle, next} from '../action-creators/player';
import store from '../store';

const Player = (props) => {
  const currentSong = props.currentSong;
  const currentSongList = props.currentSongList;
  const isPlaying = props.isPlaying;
  const progress = props.progress;

  return (
    <footer>
      <div style={!currentSong.id ? {display: 'none'} : null}>
        <div className="pull-left">
          <button className="btn btn-default" onClick={() => store.dispatch(prev())}>
            <span className="glyphicon glyphicon-step-backward"></span>
          </button>
          <button className="btn btn-default" onClick={() => store.dispatch(toggle())}>
            <span className={isPlaying ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play'}></span>
          </button>
          <button className="btn btn-default" onClick={() => store.dispatch(next())}>
            <span className="glyphicon glyphicon-step-forward"></span>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar" style={{width: `${progress * 100}%`}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Player;
