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
    const { loading, people, getVehicles, preview, setPreview } = this.props;
    const { visible } = this.state;

    return (
      <S.Home>
        <section>
          <S.PeopleList
            itemLayout="horizontal"
            dataSource={people}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.name}
                  // description={`Height: ${item.height} | Mass: ${item.mass} | Gender: ${item.gender} | Edited: ${item.edited}`}
                  description={(
                    <div>
                      <Button
                        onClick={() => {
                          getVehicles(item.id);
                          setPreview(item.id);
                          this.toggleDrawer(true);
                        }}
                      >
                        Click Me!
                      </Button>
                    </div>
                  )}
                />
              </List.Item>
            )}
          />
        </section>
        <Drawer
          width={640}
          placement="right"
          onClose={() => this.toggleDrawer(false)}
          visible={visible}
        >
          <List
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
  preview: PropTypes.array.isRequired,
  getVehicles: PropTypes.func.isRequired,
  setPreview: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectAppLoading,
  people: selectPeople,
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
