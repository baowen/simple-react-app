import React from 'react';

export default class Artist extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showContent: 'none',
      albums: []
    }

    this.showCollapsibleContent = (e,artist_id) => {

      this.fetchSongsByArtist = function(){
        fetch('/albumByArtist/' + artist_id)
        .then(res => res.json())
        .then(albums => {
          let arr = []
          arr.push({ title: albums.title, description: albums.description })
          this.setState({
            albums: arr
          })
        })
        .catch(err => {
          this.setState({
            albums: [],
            albumDescriptions: err
          })
        });
      }

      if(this.state.showContent === 'block'){
        this.setState({
          showContent: 'none'
        })
      } else {
        this.setState({
          showContent: 'block'
        })
      }
      this.fetchSongsByArtist()
    };

    this.deleteHandled = (e, artist_id) => {
      console.log("going in delete");
      e.preventDefault();

      this.setState({
        showContent: 'none'
      });

      this.deleteArtist = function(artist_id){
        fetch('/artist/' + artist_id, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json)
        .then(artist => {
          console.log(artist);
          this.props.fetchArtists();
        })
        .catch(err => {
          console.log(err);
          this.setState({
            error: err
          })
        });
      }

      this.deleteArtist(artist_id);
    }
  }

  presentAlbums(data) {
    let arr = [];
    data.forEach(function(element) {
      arr.push(
        <div key={element}>
          <h5>{element.title}</h5>
          <p>{element.description}</p>
        </div>
      );
    });
    return arr;
  }

  render() {
    return (
      <li>
        <div className="collapsible-header" onClick={(e) => this.showCollapsibleContent(e,this.props.artist_id)} tabIndex="0">
          <i className="material-icons">filter_drama</i>{this.props.name}
          <button className="waves-effect waves-light btn-small right red darken-2" type="button" onClick={(e) => this.deleteHandled(e,this.props.artist_id)}>Delete</button>
        </div>
        <div className="collapsible-body" style={{display: this.state.showContent}}>
          {this.presentAlbums(this.state.albums)}
        </div>
      </li>
    );
  }
}
