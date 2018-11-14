import React from 'react';

export default class Artist extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <img className="circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
        <span className="title">Album</span>
        <p>{this.props.name}</p>
      </li>
  
    )
  }
}
