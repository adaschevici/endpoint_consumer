import { combineReducers } from 'redux';

import {
  FETCH_DATA_LIST,
  REQUEST_ERROR_MESSAGE,
  FETCH_SEARCH_RESULTS
} from '../actions/app_actions.js';


const initialState = {
  ancientsList: [],
};

function AppReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_DATA_LIST:
      return Object.assign({}, state, {ancientsList: action.payload.data});
    case FETCH_SEARCH_RESULTS:
      return Object.assign({}, state, {});
    case REQUEST_ERROR_MESSAGE:
      return Object.assign({}, state, {});
    default:
      return state
  };
};

const rootReducer = combineReducers({
  appReducer: AppReducer,
});

export default rootReducer;
