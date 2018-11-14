import React from 'react';

class Artists extends React.Component {

  createArtists = item => {
    return (
      <li key={item.artist_id}>
          {item.name}
      </li>
    );
  }

  render() {
    const musicArtists = this.props.artists;
    const listItems = musicArtists.map(this.createArtists);
    return <ul>{listItems}</ul>
  }
}

export default Artists;
