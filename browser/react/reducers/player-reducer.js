import {
	START_PLAYING,
	STOP_PLAYING,
	SET_CURRENT_SONG,
	SET_LIST,
	SET_PROGRESS
} from '../constants';

export const initialState = {
	currentSong: {},
	currentSongList: [],
	isPlaying: false,
	progress: 0
}

export default function playerReducer (prevState = initialState, action) {
	let newState = Object.assign({}, prevState);
	switch (action.type) {
		case START_PLAYING:
			newState.isPlaying = true; 
			break;
		case STOP_PLAYING:
			newState.isPlaying = false;
			break;
		case SET_CURRENT_SONG:
			newState.currentSong = action.song;
			break;
		case SET_LIST:
			newState.currentSongList = action.list;
			break;
		case SET_PROGRESS:
			newState.progress = action.progress;
			break;
		default:
			return prevState;
	}
	return newState;
}