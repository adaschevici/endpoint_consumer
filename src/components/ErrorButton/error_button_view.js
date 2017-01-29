import React from 'react';
import { Link } from 'react-router';

const ErrorButtonView = function (props) {
  console.log(props);
  return (
    <div>
      {props.errorMessage ?
        <div className="row">
          <div className="col s12 m5">
            <div className="card-panel red">
              <span className="white-text">
                {props.errorMessage}
              </span>
            </div>
          </div>
       </div> :
       ''}
      <button
        className="btn waves-effect waves-light"
        type="button"
        name="action"
        onClick={(event) => props.handleFetchError(event)}
      >
        Search
      </button>
    </div>
  );
};

export default ErrorButtonView;
