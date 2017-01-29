import axios from 'axios';


export const FETCH_DATA_LIST = 'FETCH_DATA_LIST';
export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const REQUEST_ERROR_MESSAGE = 'REQUEST_ERROR_MESSAGE';
export const HANDLE_FIELD_CHANGE = 'HANDLE_FIELD_CHANGE';

const ROOT_URL = 'https://athena-7.herokuapp.com/ancients.json';


export function requestAncientList() {
  return (dispatch) => {
    const request = axios.get(`${ROOT_URL}`);

    request
      .then((json) => dispatch({
        type: FETCH_DATA_LIST,
        payload: json
      }));
  };
}

export function fetchSearchResults(searchTerm) {

  return (dispatch) => {
    const request = axios.get(`${ROOT_URL}?search=${searchTerm}`);
    request
      .then((json) => dispatch({
        type: FETCH_SEARCH_RESULTS,
        payload: request
      }));
  };
}

export function requestErrorMessage() {
  const request = axios.get(`${ROOT_URL}?error=true`);

  return (dispatch) => {
    request
      .then((json) => dispatch({
          type: REQUEST_ERROR_MESSAGE,
          payload: request
      }))
      .catch((json) => dispatch({
        type: REQUEST_ERROR_MESSAGE,
        message: json.message
      }));
  };
};

export function handleFieldChange(searchTerm) {
  return {
    type: HANDLE_FIELD_CHANGE,
    term: searchTerm
  };
};
