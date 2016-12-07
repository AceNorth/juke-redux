import React from 'react';
import Songs from '../components/Songs';
import {getAlbum} from '../action-creators/albums';
import store from '../store';

class Album extends React.Component {

  componentDidMount () {
    const albumId = this.props.routeParams.albumId;

    store.dispatch(getAlbum(albumId));
  }

  render () {
    const album = this.props.albums.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          player={this.props.player}
        />
      </div>
    );
  }
}

export default Album;
