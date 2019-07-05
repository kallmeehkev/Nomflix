import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store'
import * as sessionAction from './actions/session_actions'
import * as profileApiUtil from './util/profile_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        } else {
        store = configureStore();
    }
    window.fetchProfile = profileApiUtil.fetchProfile;
    window.createProfile = profileApiUtil.createProfile;
    window.updateProfile = profileApiUtil.updateProfile;
    window.deleteProfile = profileApiUtil.deleteProfile;
    ReactDOM.render(<Root store={store} />, root);
});