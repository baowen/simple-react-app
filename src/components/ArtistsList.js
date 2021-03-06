import React from 'react';
import Artist from './Artist.js';

export default class ArtistsList extends React.Component {
  render() {
    let artists = this.props.artists.map(artist => <Artist key={artist.artist_id} {...artist} fetchArtists={this.props.fetchArtists} />)
    return (
      <div>
        <ul className="collapsible collapsible-accordion">
          {artists}
        </ul>
      </div>
    )
  }
}
