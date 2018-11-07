import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './style.css';
class Spotify extends Component {

  state = {
    artist: '',
  };
  componentDidMount() {
    console.log('artist are commig on there way');

    axios.get(`https://api.spotify.com/v1/artists/2JGLjTHV2t8u8wxmLaiFfe`)
    .then(response => {
      console.log(response.data);
      this.setState({ artist: response.data })
    })
      .catch(err => console.log(err));
  }

  render() {
    const { followers, genres, images, name, popularity} = this.state.artist;
    return (
      <Fragment>  
        {
          !this.state.artist ? 'loading.....' :
            <div className="artist">
              <div className="artist_image_section">
                <img className="image_artist" src={images[0].url} alt={name} />
              </div>
              <div className="artist_stat">
                <ul>
                  <li className="artist_name">Artist: {name} </li>
                  <li className="artist_followers"><i className="fa fa-user" />Followers: {followers.total}</li>
                  <li className="artist_name">Popularity: {popularity} </li>
                  <li className="artist_genres">
                    {
                      genres.map((genre, i) => <div key={i} >{genre}</div>)
                    }
                  </li>
                </ul>
              </div>
            </div>
        }
      </Fragment>
    )
  }
}

export default Spotify;