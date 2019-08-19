import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import mediaReducer from './media_reducer';
import genresReducer from './genres_reducer';
import mediaGenresReducer from './media_genres_reducer';
import myListsReducer from './my_lists_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    media: mediaReducer,
    genres: genresReducer,
    mediaGenres: mediaGenresReducer,
    myLists: myListsReducer,
    searchResults: searchReducer
})

export default entitiesReducer;