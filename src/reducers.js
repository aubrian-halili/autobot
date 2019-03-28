/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE, connectRouter } from 'connected-react-router/immutable';
import globalReducer from 'modules/global';
import translationsReducer from 'modules/translations';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    route: routeReducer,
    global: globalReducer,
    translations: translationsReducer,
  });
}
