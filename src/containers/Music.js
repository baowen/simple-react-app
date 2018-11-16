import React from 'react';
import ArtistsList from '../components/ArtistsList';


class Music extends React.Component {

  constructor() {
    super();
    this.state = {
      artists: [],
      artistName: "",
      error: null,
    }

    this.handleArtistNameChange = this.handleArtistNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchArtists = this.fetchArtists.bind(this);
  }

  componentDidMount() {
    this.fetchArtists(this);
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

  createArtist = function(data){
    fetch('/artist', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json)
    .then(artist => {
      console.log(artist);
      this.fetchArtists(this);
    })
    .catch(err => {
      console.log(err);
      this.setState({
        error: err
      })
    });
  }

  handleArtistNameChange(e) {
    this.setState({artistName: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let data = {
      name: this.state.artistName
    };
    this.createArtist(data);
    this.setState({artistName: ""});
  }

  render() {
      return (
        <React.Fragment>
          <h1>Music Database</h1>
          <ArtistsList artists={this.state.artists} fetchArtists={this.fetchArtists} />
          <div className="row">
            <h3>Add Artist</h3>
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Artist Name" id="name" type="text" className="validate" value={this.state.artistName} onChange={this.handleArtistNameChange} />
                  <label htmlFor="first_name">Name</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Add Artist
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </React.Fragment>
      );
  }
}

export default Music;
