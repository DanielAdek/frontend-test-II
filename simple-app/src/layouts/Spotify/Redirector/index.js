import React from 'react';
import { Redirect } from 'react-router-dom';

const SpotifyApplication = () => {
    const paramsString = window.location.href.split('#')[1];
    const params = new URLSearchParams(paramsString);

    localStorage.setItem('token', params.get('access_token'));
    localStorage.setItem('expiresIn', params.get('expires_in',));
    localStorage.setItem('authUser', true);

    return (
      <Redirect to='/spotify' />
    );
}

export default SpotifyApplication;