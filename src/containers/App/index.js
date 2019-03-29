import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'themes/global';
import { isMobile, isSafari } from 'common/helpers';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import { defaultTheme } from 'themes/variables';

// Pages
import Home from 'containers/Home';

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
    return (
      <ThemeProvider theme={defaultTheme}>
        <main className="app">
          <Navigation />
          <div style={{ paddingTop: '65px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <Footer />
          <GlobalStyle />
        </main>
      </ThemeProvider>
    );
  }
}

App.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
