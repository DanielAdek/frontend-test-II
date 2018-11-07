
import React, { Component } from 'react';
import axios from 'axios';

import './style.css';
class RelatedArtists extends Component {

  state = {
    allRelatedArtists: '',
  };

  componentDidMount() {
    const { token } = localStorage;

    axios.get(`https://api.spotify.com/v1/artists/2JGLjTHV2t8u8wxmLaiFfe/related-artists`)
      .then(response => {
        console.log(response.data.artists.slice(-1, 10));
        this.setState({ allRelatedArtists: response.data.artists.slice(0, 10) })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="related_artists">
        <div className="header header_related_artist"> Related Artists </div>
        {
          !this.state.allRelatedArtists ? 'loading....' :
            this.state.allRelatedArtists.map(artist => {
              const { name, images, id, followers, type, popularity } = artist;
              return (
                <div className="artist_related_section" key={id} >
                  <div className="artist_related_photo">
                    <img className="images_related_artists" src={images[0].url} alt={name} />
                  </div>
                  <div className="artist_related_stat">
                    <ul>
                      <li className="artist_related_name">{type}: {name} </li>
                      <li className="followers_number">Followers: {followers.total}</li>
                      <li className="popular"> Popularity: {popularity}</li>
                      <li className="genres">
                       <a href="#">View Songs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
        }
      </div>
    );
  }
}

export default RelatedArtists;