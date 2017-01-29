import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fetchSearchResults, handleFieldChange } from '../../actions/app_actions';
import SearchBoxView from './search_box_view';
import AppListItem from '../AppListItem/app_list_item_view';

class SearchBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFetchSearchResults = this.handleFetchSearchResults.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.searchResults !== this.props.searchResults;
  }

  renderListItem(ancient) {
    return <AppListItem key={ancient.name} ancient={ancient} />;
  }

  handleFieldChange(event, field) {
    this.props.handleFieldChange(event.target.value, field);
  }

  handleFetchSearchResults(event) {
    event.preventDefault();
    this.props.fetchSearchResults(this.props.searchTerm);
  }

  render () {
    console.log(this.props.searchResults);
    return (
      <SearchBoxView
        renderItem={this.renderListItem}
        results={this.props.searchResults}
        handleFieldChange={this.handleFieldChange}
        fetchSearchResults={this.handleFetchSearchResults}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.appReducer.searchResults,
    searchTerm: state.appReducer.searchTerm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSearchResults,
    handleFieldChange
  }, dispatch);
};

SearchBoxContainer.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
