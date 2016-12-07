import {combineReducers} from 'redux';
import lyricsReducer from './lyrics-reducer';
import playerReducer from './player-reducer';
import albumsReducer from './albums-reducer';
import artistsReducer from './artists-reducer';

export default combineReducers({
	lyrics: lyricsReducer,
	player: playerReducer,
	albums: albumsReducer,
	artists: artistsReducer,
});