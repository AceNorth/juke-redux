import {RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../constants';
import {convertAlbums} from '../utils';
import axios from 'axios';


export const getArtists = () => {
	return (dispatch, getState) => {
		axios.get(`/api/artists/`)
	      .then(res => res.data)
	      .then(artists => dispatch(setArtists(artists)));
	}
}

export const setArtists = artists => {
	return {type: RECEIVE_ARTISTS, artists}
}

export const getArtist = id => {
	return (dispatch, getState) => {
		Promise.all([
				axios.get(`/api/artists/${id}`),
				axios.get(`/api/artists/${id}/albums`)
			])
	      .then(([artist, albums]) => {
	      	artist.albums = convertAlbums(albums);
	      	artist.songs = albums.reduce((prev, album) => {
	      		return [...prev, ...album.songs]}, []);
	      	dispatch(setArtist(artist));
	      });
	}
}

export const setArtist = selectedArtist => {
	return {type: RECEIVE_ARTIST, selectedArtist}
}