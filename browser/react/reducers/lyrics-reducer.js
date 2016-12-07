import {SET_LYRICS} from '../constants';

export const intialState = {
	text: ''
};

export default function lyricsReducer (prevState = intialState, action) {
	let newState = Object.assign({}, prevState);
	switch (action.type) {
		case SET_LYRICS:
			newState.text = action.lyric;
			break;
		default:
			return prevState;
	}
	return newState;
}