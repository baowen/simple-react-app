import React from 'react';
import ArtistsList from '../components/ArtistsList';


class Music extends React.Component {

  constructor() {
    super();
    this.state = {
      artists: [],
      error: null,
    }
  }

  componentDidMount() {
    this.fetchArtists();
  }

  fetchArtists = function(){

    fetch('/artist')
    .then(res => res.json())
    .then(artists => {
      console.log(artists);
      this.setState({
        artists
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        artists: [],
        error: err
      })
    });
  }

  render() {
      return (
          <div className="container">
            <h1>Music Database</h1>
            <ArtistsList artists={this.state.artists}  />
          </div>
      );
  }
}

export default Music;
