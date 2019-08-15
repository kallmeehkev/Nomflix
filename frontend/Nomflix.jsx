import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';

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
        if (window.currentProfile) {
            preloadedState["ui"] = {}
            preloadedState["ui"]["currentProfileId"] = window.currentProfile.id;
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
        if (window.currentProfile) {
            delete window.currentProfile;
        }
        } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root);
});