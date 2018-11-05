import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import './style.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="button-section-home">
                <Link to="/giph">
                    <Button text="Open Giph" />
                </Link>
                <Link to="/spotify">
                    <Button text="Open Spotify" />
                </Link>
            </div>
        </div>
    );
}

export default Home;
