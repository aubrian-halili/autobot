import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import scrollToComponent from 'react-scroll-to-component';
import { formatDate } from 'common/helpers';
import {
  Input, List, Button, Drawer, Divider,
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

  onScroll = () => {
    const navigation = document.querySelector('#top');
    scrollToComponent(navigation);
    navigation.focus();
  };

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
          <S.PeopleList
            itemLayout="horizontal"
            dataSource={people}
            pagination={{
              total,
              defaultCurrent: 1,
              onChange: (page) => {
                this.onScroll();
                getPeople({ page });
              },
            }}
            renderItem={(item) => (
              <List.Item
                actions={[(
                  <Button
                    onClick={() => {
                      getVehicles(item.id);
                      setPreview(item.id);
                      this.toggleDrawer(true);
                    }}
                  >
                    Show Vehicles
                  </Button>
                )]}
              >
                <List.Item.Meta
                  title={item.name}
                  description={(
                    <div>
                      <b>Height:</b>{` ${item.height}`}
                      <Divider type="vertical" />
                      <b>Mass:</b>{` ${item.mass}`}
                      <Divider type="vertical" />
                      <b>Gender:</b>{` ${_.capitalize(item.gender)}`}
                      <Divider type="vertical" />
                      <b>Edited:</b>{` ${formatDate(item.edited)}`}
                    </div>
                  )}
                />
              </List.Item>
            )}
          />
        </section>
        <Drawer
          title={(<b>VEHICLES</b>)}
          width="45%"
          placement="right"
          onClose={() => this.toggleDrawer(false)}
          visible={visible}
        >
          <S.VehicleList
            itemLayout="horizontal"
            dataSource={preview}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.name}
                  description={(
                    <div>
                      <b>Model:</b>{` ${item.model}`}
                      <Divider type="vertical" />
                      <b>Manufacturer:</b>{` ${item.manufacturer}`}
                      <Divider type="vertical" />
                      <b>Vehicle Class:</b>{` ${item.vehicleClass}`}
                    </div>
                  )}
                />
              </List.Item>
            )}
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
