import { createStore, combineReducers } from 'redux';
import appReducer from './state/app/appReducer';

const rootReducer = combineReducers({
  // Define a top-level state
  app: appReducer,
});

const store = createStore(rootReducer);

export default store;
