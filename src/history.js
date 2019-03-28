import {
  createBrowserHistory,
} from 'history';
import createHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory({
  basename: process.env.REACT_APP_BASE_NAME,
});

const history = createHistory();

export {
  browserHistory,
  history,
};

