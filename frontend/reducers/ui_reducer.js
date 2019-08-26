import modalReducer from './modal_reducer';
import currentProfileReducer from './current_profile_reducer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
    modal: modalReducer,
    currentProfileId: currentProfileReducer,
})

export default uiReducer;