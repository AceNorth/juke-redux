import React from 'react';

export default function(props) {
	const text = props.text;
	const setArtist = props.setArtist;
	const artistQuery = props.artistQuery;
	const setSong = props.setSong;
	const songQuery = props.songQuery;
	const submit = props.submit;

	const artistChange = e => {
		setArtist(e.target.value);
	};

	const songChange = e => {
		setSong(e.target.value);
	};

	return (
		<div>
			<form>
				<input type="text" onChange={setArtist} name="artist" value={props.artistQuery} placeholder="Enter Artist Name"/>
				<input type="text" onChange={setSong} name="song" value={props.songQuery} placeholder="Enter Song Name"/>
				<button onClick={submit} >Search</button>
			</form>
			<pre>
			{text}
			</pre>
		</div>
	);
};