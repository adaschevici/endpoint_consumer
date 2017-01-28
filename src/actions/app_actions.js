import axios from 'axios';


export const FETCH_DATA_LIST = 'FETCH_DATA_LIST';
export const FETCH_SEARHC_RESULTS = 'FETCH_SEARCH_RESULTS';
export const REQUEST_ERROR_MESSAGE = 'REQUEST_ERROR_MESSAGE';

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
  const request = axios.get(`${ROOT_URL}?search=${searchTerm}`);

  return {
    type: FETCH_SEARCH_RESULTS,
    payload: request
  };
};

export function requestErrorMessage() {
  const request = axios.get(`${ROOT_URL}?error=true`);

  return {
    type: REQUEST_ERROR_MESSAGE,
    payload: request
  };
};
