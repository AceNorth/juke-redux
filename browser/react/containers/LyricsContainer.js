import React, {Component} from 'react';

import store from '../store.js';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';

import Lyrics from '../components/Lyrics';

const initialLocalState = {
	artistQuery: '',
	songQuery: ''
};

export default class LyricsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, initialLocalState, store.getState());
		this.unsubscribe = null;
		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	setArtist(e) {
		this.setState({artistQuery: e.target.value});
	}

	setSong(e) {
		this.setState({songQuery: e.target.value});
	}

	submit(e) {
		e.preventDefault();
		if (this.state.artistQuery && this.state.songQuery) {
			store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
	}
	}

	render() {
		console.log(this.state);
		return (
			<Lyrics
				text={this.state.lyrics.text}
				artistQuery={this.state.artistQuery}
				setArtist={this.setArtist}
				songQuery={this.state.songQuery}
				setSong={this.setSong}
				submit={this.submit} />
		);
	}
}