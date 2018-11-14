import React from 'react';
import Artist from './Artist.js';

export default class ArtistsList extends React.Component {
  render() {
    let artists = this.props.artists.map(artist => <Artist key={artist.artist_id} {...artist} />)
    return (
      <div>
        <ul className="collection">
          {artists}
        </ul>
      </div>
    )
  }
}
