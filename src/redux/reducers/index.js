import { combineReducers } from 'redux';
import authReducer from './authReducer';
import leadReducer from './leadReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    lead: leadReducer
});

export default rootReducer;