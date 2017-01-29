import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreloaderView from '../utils/preloader_view';
import AppListView from './app_list_view';
import AppListItem from '../AppListItem/app_list_item_view';

import SearchBoxContainer from '../SearchBox/search_box_container';
import ErrorButtonContainer from '../ErrorButton/error_button_container';

import { fetchDataList, requestAncientList } from '../../actions/app_actions';

class AppListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.requestAncientList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.ancientsList !== this.props.ancientsList;
  }

  renderListItem(ancient) {
    return <AppListItem key={ancient.name} ancient={ancient} />
  }

  render () {
    return (
      <div>
        <SearchBoxContainer
          renderItem={this.renderListItem}
          results={this.props.searchResults}
        />
        <AppListView
          renderItem={this.renderListItem}
          ancients={this.props.ancientsList}
        />
        <ErrorButtonContainer
          handleFetchError={this.handleFetchError}
        />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  if (state.appReducer.ancientsList.length > 0) {
    return {
      ancientsList: state.appReducer.ancientsList,
    };
  }
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestAncientList,
  }, dispatch);
}

AppListContainer.propTypes = {
  ancientsList: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps, mapDispatchToProps)(AppListContainer);
