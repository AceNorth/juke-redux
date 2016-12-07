import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';

export const intialState = {
	albums: {},
	selectedAlbum: {}
};

export default function albumsReducer (prevState = intialState, action) {
	let newState = Object.assign({}, prevState);
	switch (action.type) {
		case RECEIVE_ALBUMS:
			newState.albums = action.albums;
			break;
		case RECEIVE_ALBUM:
			newState.selectedAlbum = action.selectedAlbum;
			break;
		default:
			return prevState;
	}
	return newState;
}