import {RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../constants';

export const intialState = {
	artists: {},
	selectedArtist: {}
};

export default function artistsReducer (prevState = intialState, action) {
	let newState = Object.assign({}, prevState);
	switch (action.type) {
		case RECEIVE_ARTISTS:
			newState.artists = action.artists;
			break;
		case RECEIVE_ARTIST:
			newState.selectedArtist = action.selectedArtist;
			break;
		default:
			return prevState;
	}
	return newState;
}