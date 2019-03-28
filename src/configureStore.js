import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router/immutable';
import createReducer from 'reducers';
import api from 'client';

export default function configureStore(initialState = {}, history) {
  const store = createStore(
    createReducer(history),
    fromJS(initialState),
    compose(
      applyMiddleware(
        thunk.withExtraArgument({ api }),
        routerMiddleware(history),
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f, // eslint-disable-line no-underscore-dangle
    ),
  );

  store.injectedReducers = {}; // Reducer registry

  return store;
}
