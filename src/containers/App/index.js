import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { selectAppPending, selectAppTheme, selectAppLoading } from 'common/selectors';
import GlobalStyle from 'themes/global';
import { isMobile, isSafari } from 'common/helpers';
import Navigation from 'components/Navigation';
import LoadingMask from 'components/LoadingMask';
import Footer from 'components/Footer';
import { defaultTheme } from 'themes/variables';

// Pages
import Home from 'containers/Home';

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

/* eslint-disable */
const DisableMobileRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const mobile = isMobile();
      const safari = isSafari();

      if (mobile || safari) {
        return <Redirect to="/exhibit-and-sponsor" />;
      }
      return <Component {...props} />;
    }}
  />
);
/* eslint-enable */

class App extends React.Component {
  render() {
    const { appPending, loading } = this.props;

    return (
      <ThemeProvider theme={defaultTheme}>
        <main className="app">
          {!appPending && (
            <div>
              <Navigation />
              <div style={{ paddingTop: '65px' }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
              <Footer />
            </div>
          )}
          {(loading || appPending) && <LoadingWrapper><LoadingMask /></LoadingWrapper>}
          <GlobalStyle />
        </main>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  appPending: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  appTheme: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appPending: selectAppPending,
  appTheme: selectAppTheme,
  loading: selectAppLoading,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
