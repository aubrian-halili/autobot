import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import {
  List, Button, Drawer,
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
          <S.PeopleList
            itemLayout="horizontal"
            dataSource={people}
            pagination={{
              defaultCurrent: 1,
              total,
              onChange: (page) => getPeople({ page }),
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
                  description={`Height: ${item.height} | Mass: ${item.mass} | Gender: ${item.gender} | Edited: ${item.edited}`}
                />
              </List.Item>
            )}
          />
        </section>
        <Drawer
          title={(<b>VEHICLES</b>)}
          width="50%"
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
                  description={`Model: ${item.model} | Manufacturer: ${item.manufacturer} | Vehicle Class: ${item.vehicleClass}`}
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
