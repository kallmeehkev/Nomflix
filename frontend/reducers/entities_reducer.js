import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import mediaReducer from './media_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    media: mediaReducer
})

export default entitiesReducer;