import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import {
  Input, Drawer,
} from 'antd';

import LoadingMask from 'components/LoadingMask';
import {
  selectAppLoading,
  selectPeople,
  selectTotal,
  selectPreview,
} from 'common/selectors';
import {
  getPeopleAsync,
  getVehiclesAsync,
  setPreviewAction,
} from 'modules/global';

import People from './People';
import Vehicles from './Vehicles';
import * as S from './styles';

const Search = Input.Search;

class App extends Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    const { getPeople } = this.props;
    getPeople();
  }

  toggleDrawer = (visible) => {
    this.setState({ visible });
  }

  render() {
    const { visible } = this.state;
    const {
      loading,
      getPeople,
      people,
      total,
      getVehicles,
      preview,
      setPreview,
    } = this.props;

    return (
      <S.Home>
        <section>
          <S.Search>
            <div></div>
            <div>
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                allowClear
                onSearch={(search) => getPeople({ search })}
              />
            </div>
          </S.Search>
          <People
            data={people}
            total={total}
            getPeople={getPeople}
            getVehicles={getVehicles}
            setPreview={setPreview}
            toggleDrawer={this.toggleDrawer}
          />
        </section>
        <Drawer
          title={(<b>VEHICLES</b>)}
          width="40%"
          placement="right"
          onClose={() => this.toggleDrawer(false)}
          visible={visible}
        >
          <Vehicles
            data={preview}
          />
        </Drawer>
        {loading && (
          <S.LoadingWrapper>
            <LoadingMask />
          </S.LoadingWrapper>
        )}
      </S.Home>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  getPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  preview: PropTypes.array.isRequired,
  getVehicles: PropTypes.func.isRequired,
  setPreview: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectAppLoading,
  people: selectPeople,
  total: selectTotal,
  preview: selectPreview,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPeople: getPeopleAsync,
    getVehicles: getVehiclesAsync,
    setPreview: setPreviewAction,
  }, dispatch);
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
