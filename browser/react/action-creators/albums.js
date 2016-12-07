import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
import {convertAlbums, convertAlbum} from '../utils';
import axios from 'axios';


export const getAlbums = () => {
	return (dispatch, getState) => {
		axios.get(`/api/albums/`)
	      .then(res => res.data)
	      .then(albums => dispatch(setAlbums(convertAlbums(albums))));
	}
}

export const setAlbums = albums => {
	return {type: RECEIVE_ALBUMS, albums}
}

export const getAlbum = id => {
	return (dispatch, getState) => {
		axios.get(`/api/albums/${id}`)
	      .then(res => res.data)
	      .then(album => dispatch(setAlbum(convertAlbum(album))));
	}
}

export const setAlbum = selectedAlbum => {
	return {type: RECEIVE_ALBUM, selectedAlbum}
}