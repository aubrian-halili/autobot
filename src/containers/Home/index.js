import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import styled from 'styled-components';

import { selectAppLoading } from 'common/selectors';
import LoadingMask from 'components/LoadingMask';
import { getPeopleAsync } from 'modules/global';

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
    const { loading } = this.props;

    return (
      <div>
        <StyledWrapper>
          <h1 className="boom">Welcome Autobot<br />{process.env.REACT_APP_HOST}</h1>
        </StyledWrapper>
        {(loading) && <LoadingWrapper><LoadingMask /></LoadingWrapper>}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  getPeople: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectAppLoading,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPeople: getPeopleAsync,
  }, dispatch);
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
