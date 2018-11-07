import { Link } from 'react-router-dom';
import React, {Fragment} from 'react';
import Artists from './Artists';
import RelateArtists from './RelateArtists';

import './style.css'
const SpotifyApp = () => {
    return (
        <Fragment>
        <Link to='/' className="back">back</Link>
        <div className="container_artists">
            <Artists />
            <RelateArtists />
        </div>
        </Fragment>
    )
}


export default SpotifyApp;
