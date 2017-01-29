import { combineReducers } from 'redux';

import {
  FETCH_DATA_LIST,
  REQUEST_ERROR_MESSAGE,
  FETCH_SEARCH_RESULTS,
  HANDLE_FIELD_CHANGE
} from '../actions/app_actions';


const initialState = {
  ancientsList: [],
  searchResults: [],
  searchTerm: '',
  errorMessage: '',
};

function AppReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_DATA_LIST:
      return Object.assign({}, state, {ancientsList: action.payload.data});
    case HANDLE_FIELD_CHANGE:
      return Object.assign({}, state, {searchTerm: action.term});
    case FETCH_SEARCH_RESULTS:
      return Object.assign({}, state, {searchResults: action.payload.ancients});
    case REQUEST_ERROR_MESSAGE:
      return Object.assign({}, state, {errorMessage: action.message});
    default:
      return state
  };
};

const rootReducer = combineReducers({
  appReducer: AppReducer,
});

export default rootReducer;
