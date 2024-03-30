
import { combineReducers } from "redux";
import hobbyReducer from './hobby.jsx'
import userReducer from './user.jsx'


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;