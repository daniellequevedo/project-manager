import { combineReducers } from 'redux';

import dataReducer from './data-reducer';
import teammembersReducer from './teammembers-reducer';

// map paticular reducer to a particular portion of application state
export default combineReducers({
    data: dataReducer,
    teammembers: teammembersReducer
});