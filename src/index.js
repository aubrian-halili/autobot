import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore from 'configureStore';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'themes/fonts/fonts.css';

import LanguageProvider from 'containers/LanguageProvider';
import App from 'containers/App';
import NotFoundPage from 'containers/NotFoundPage';

import { browserHistory, history } from './history';

// import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');
const store = configureStore({}, history);

window.TitoDevelopmentMode = process.env.NODE_ENV !== 'production';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider>
        <ConnectedRouter history={browserHistory}>
          <Switch>
            <Route exact path="/not-found" component={NotFoundPage} />
            <Route path="/" component={App} />
            <Redirect to="/not-found" />
          </Switch>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    target,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(target);
    render();
  });
}

render();
// registerServiceWorker();
