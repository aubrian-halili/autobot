import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  List, Button,
} from 'antd';

import { selectAppLoading, selectPeople } from 'common/selectors';
import LoadingMask from 'components/LoadingMask';
import { getPeopleAsync, getPersonVehiclesAsync } from 'modules/global';

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
  componentDidMount() {
    const { getPeople } = this.props;
    getPeople();
  }

  render() {
    const { loading, people, getVehicles } = this.props;

    return (
      <div>
        <StyledWrapper>
          <h1 className="boom">Welcome Autobot<br />{process.env.REACT_APP_HOST}</h1>
        </StyledWrapper>
        {(loading) && <LoadingWrapper><LoadingMask /></LoadingWrapper>}
        <List
          itemLayout="horizontal"
          dataSource={people}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                // description={`Height: ${item.height} | Mass: ${item.mass} | Gender: ${item.gender}| Edited: ${item.edited}`}
                description={(
                  <div>
                    <Button
                      onClick={() => getVehicles(item.id)}
                    >
                      Click Me!
                    </Button>
                  </div>
                )}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  getPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
  getVehicles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectAppLoading,
  people: selectPeople,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPeople: getPeopleAsync,
    getVehicles: getPersonVehiclesAsync,
  }, dispatch);
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
