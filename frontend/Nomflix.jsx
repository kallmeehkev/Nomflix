import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store'
import * as profileActions from './actions/profile_actions'

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
    window.fetchProfiles = profileActions.fetchProfiles
    window.fetchProfile = profileActions.fetchProfile
    window.createProfile = profileActions.createProfile
    window.updateProfile = profileActions.updateProfile
    window.deleteProfile = profileActions.deleteProfile
    window.receiveCurrentProfile = profileActions.receiveCurrentProfile
    window.removeCurrentProfile = profileActions.removeCurrentProfile
    window.setCurrentProfile = profileActions.setCurrentProfile
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    ReactDOM.render(<Root store={store} />, root);
});