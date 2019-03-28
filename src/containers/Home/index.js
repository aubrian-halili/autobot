import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import styled from 'styled-components';
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

const StyledWrapper = styled.section`
  text-align: center;
  > h1 {
    margin-top: 20px;
    font-weight: 300;
    font-size: 2.5em;
    margin: 25px 0;
  }
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.8);
  z-index: 999999;
  > * {
    z-index: 1000000;
    p {
      font-weight: bold;
      font-size: 20px!important;
    }
  }
`;

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
      <div>
        <StyledWrapper>
        </StyledWrapper>
        {(loading) && <LoadingWrapper><LoadingMask /></LoadingWrapper>}
        <List
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
      </div>
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
