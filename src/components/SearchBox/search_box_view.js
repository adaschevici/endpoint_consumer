import React from 'react';

const SearchBoxView = function (props) {
  return (
    <div>
      <div>
        <label htmlFor="search">Search </label>
        <input id="search" type="text" onChange={(event) => props.handleFieldChange(event, 'searchTerm')}/>
        <button
          className="btn waves-effect waves-light"
          type="button"
          name="action"
          onClick={(event) => props.fetchSearchResults(event)}
        >
          Search
        </button>
      </div>
      {props.results && props.results.length ?
        <table>
          <tbody>
            <tr>
              <th>Ancient Name</th>
              <th>Superpower</th>
            </tr>
            {props.results.map(props.renderItem)}
          </tbody>
        </table> :
        ''}
    </div>
  );
};

export default SearchBoxView;
