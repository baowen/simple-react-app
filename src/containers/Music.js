import React from 'react';
import Artists from '../components/Artists';


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
    fetch('http://localhost:3000/artist', {
      mode: 'no-cors'
    })
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));

    // fetch('http://localhost:3000/artist', {
    //   mode: 'no-cors'
    // })
    // .then(res => res.json())
    // .then(artists => {
    //   console.log(artists);
    //   this.setState({
    //     artists
    //   })
    // })
    // .catch(err => {
    //   console.log(err);
    //   this.setState({
    //     artists: [],
    //     error: err
    //   })
    // });
  }

  render() {
      return (
          <div >
            <h1>Music Database</h1>
            <Artists artists={this.state.artists}  />
          </div>
      );
  }
}

export default Music;
