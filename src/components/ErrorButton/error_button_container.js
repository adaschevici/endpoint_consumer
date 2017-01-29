import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { requestErrorMessage } from '../../actions/app_actions';
import ErrorButtonView from './error_button_view';

class ErrorButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFetchError = this.handleFetchError.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.errorMessage !== this.props.errorMessage;
  }

  handleFetchError(event) {
    event.preventDefault();
    this.props.requestErrorMessage();
  }

  render () {
    return (
      <ErrorButtonView
        handleFetchError={this.handleFetchError}
        errorMessage={this.props.errorMessage}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.appReducer.errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestErrorMessage
  }, dispatch);
};

ErrorButtonContainer.propTypes = {
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorButtonContainer);
