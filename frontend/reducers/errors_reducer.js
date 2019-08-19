import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import profileErrorsReducer from './profile_errors_reducer';
import mediumErrorsReducer from './medium_errors_reducer';
import myListErrorsReducer from './my_list_errors_reducer';
import searchErrorsReducer from './search_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    profile: profileErrorsReducer,
    medium: mediumErrorsReducer,
    myList: myListErrorsReducer,
    search: searchErrorsReducer,
})

export default errorsReducer;