import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer
})

export default entitiesReducer;