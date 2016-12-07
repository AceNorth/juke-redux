export const convertSong = (song) => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

export const convertSongs = songs => {
  return songs.map(convertSong);
};

export const convertAlbum = (album) => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = convertSongs(album.songs);
  return album;
};

export const convertAlbums = (albums) =>
  albums.map(album => convertAlbum(album));

const mod = (num, m) => ((num % m) + m) % m;

export const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};
