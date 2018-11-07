import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from '../../components/InputField';

import './style.css';

const secret = '3E2QnYk4YDxxNfYiDdz2Y610pLIyBHhz';

class Gif extends Component {
  state = {
    chatText: '',
    images: []
  }

  handleChangeEvent = (event) => {
    this.setState({
      chatText: event.target.value
    })
  }

  handleSubmitEvent = (event) => {
    if (event.charCode === 13) {
      if (event.target.value.trim() === '') {
        alert('Please enter a text');
      } else {
        event.target.value = '';
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${secret}&q=${this.state.chatText}&limit=${1}`)
          .then(response => {
            const data = response.data.data[0];
            this.setState({ images: [...this.state.images, data.images.downsized.url] })
          }).catch(() => {
            alert('No Gif Found!');
          })
      }
    }
  }

  render() {
    const { chatText } = this.state;
    return (
      <div className="container">
        <div className="header" >
          <h3 style={{ paddingLeft: '10px', color: 'white' }}>Gif pics</h3>
          <div className="nav">
            <Link className="navlink" to="/" >Home</Link>
            <Link className="navlink" to="/spotify" >Spotify</Link>
          </div>
        </div>
        <div className="screen">
          {this.state.images.length < 1 ? <h4>
            <i style={{margin: '0 5px'}} className="fas fa-pencil-alt"></i>
            Enter text in the input below!</h4> :
            this.state.images.map((image, i) =>
            <div key={i}>
              <img
                src={`${image}`}
                alt="gif"
                className="gifImage"
              />
            </div>
          )}
        </div>
        <Input
          className="text-area"
          type="text"
          name="chatText"
          value={chatText}
          changed={(event) => this.handleChangeEvent(event)}
          keyPress={this.handleSubmitEvent}
        />
      </div>
    )
  }
}

export default Gif;
