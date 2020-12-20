import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userLoggedReducer from "./reducers/user/reducer-user";
import teamsReducer from './reducers/team/reducer-team';

const reducers = combineReducers({
  userLogged: userLoggedReducer,
  teamsReducer: teamsReducer,
});

const storeConfig = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default storeConfig;
