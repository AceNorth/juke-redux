import AUDIO from '../audio';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

import {
	START_PLAYING,
	STOP_PLAYING,
	SET_CURRENT_SONG,
	SET_LIST,
	SET_PROGRESS
} from '../constants';

export const startPlaying = () => {
	return {type: START_PLAYING}
}

export const play = () => {
	return (dispatch, getState) => {
		AUDIO.play()
		dispatch(startPlaying());
	};
};

export const stopPlaying = () => {
	return {type: STOP_PLAYING};
}

export const pause = () => {
	return (dispatch, getState) => {
		AUDIO.pause()
		dispatch(stopPlaying());
	};
};

export const setCurrentSong = id => {
	const song = typeof id === 'object'
		? id
		: getState().player.currentSongList.find(song => song.id === id);

	return {type: SET_CURRENT_SONG, song};
};

export const setList = songs => {
	return {
		type: SET_LIST,
		list: songs
	};
};

export const setProgress = progress => {
	return {
			type: SET_PROGRESS, progress
		};
};

export const updateProgress = () => {
	return (dispatch, getState) => {
		dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
	};
};

export const load = (currentSong, currentSongList) => {
    return (dispatch, getState) => {
    	AUDIO.src = currentSong.audioUrl;
	    AUDIO.load();
	    dispatch(setList(currentSongList));
	    dispatch(setCurrentSong(currentSong));
	}
}

export const startSong = (song, list) => {
    return (dispatch, getState) => {
    	dispatch(pause());
    	dispatch(load(song, list));
    	dispatch(play())
    }
  }

export const toggleOne = (selectedSong, selectedSongList) => {
	return (dispatch, getState) => {
	    if (selectedSong.id !== getState().player.currentSong.id) {
	      dispatch(startSong(selectedSong, selectedSongList));
	    }
	    else dispatch(toggle());
	}
  }

 export const toggle = () => {
 	return (dispatch, getState) => {
	    if (getState().player.isPlaying) {
	    	dispatch(pause());
	    }
	    else dispatch(play());		
 	}
  }

export const next = () => {
	return (dispatch, getState) => {
		dispatch(startSong(...skip(1, getState().player)))
	}
  }

export const prev = () => {
	return (dispatch, getState) => {
		dispatch(startSong(...skip(-1, getState().player)))
	}
  }
