import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import './style.css';

const Home = () => {
  return (
    <div className="home-container">
    <header className="home_header">
      <div>GS</div>
      <nav className="nav_home">
      <Link to="/giph">Open Giph</Link>
      <a href="https://accounts.spotify.com/authorize?client_id=b1e14dae5cc34f89889c195c40d1768c&scope=user-read-email%20user-top-read&response_type=token&redirect_uri=http://localhost:3000/callback">
        Open Spotify
        </a>
      </nav>
    </header>
      <div className="button-section-home">
        <Link to="/giph">
          <Button text="Open Giph" />
        </Link>
        <a href="https://accounts.spotify.com/authorize?client_id=b1e14dae5cc34f89889c195c40d1768c&scope=user-read-email%20user-top-read&response_type=token&redirect_uri=http://localhost:3000/callback">
          <Button text="Open Spotify" />
        </a>
      </div>
      <footer>
        <p>Daniel Adekunle GS App &copy; 2018</p>
      </footer>
    </div>
  );
}

export default Home;
