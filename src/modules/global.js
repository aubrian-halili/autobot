import { fromJS } from 'immutable';
import { get } from 'lodash';
import { createAction, handleActions } from 'redux-actions';
import { message } from 'antd';
import { arrayToObject } from 'common/helpers';

const GET_CONFERENCE_SUCCESS = 'modules/Global/GET_CONFERENCE_SUCCESS';
const GET_SETTINGS_SUCCESS = 'modules/Global/GET_SETTINGS_SUCCESS';
const GET_GLOBAL_DATA_SUCCESS = 'modules/Global/GET_GLOBAL_DATA_SUCCESS';
const TOGGLE_LOADING_MASK = 'modules/Global/TOGGLE_LOADING_MASK';

const initialState = fromJS({
  ui: {
    appPending: true, // listen to this when initiating app loader
    appTheme: 'europe', // set to asia or europe
    loading: false, // toggling app loading mask
  },
  data: {
    settings: {},
    conference: {},
    titoTickets: {},
  },
});

const reducer = handleActions({
  [GET_CONFERENCE_SUCCESS]: (state, { payload: { conference } }) => state.setIn(['data', 'conference'], fromJS(conference)),
  [GET_SETTINGS_SUCCESS]: (state, { payload: { settings } }) => state.setIn(['data', 'settings'], fromJS(settings)),
  [GET_GLOBAL_DATA_SUCCESS]: (state) => state.setIn(['ui', 'appPending'], false),
  [TOGGLE_LOADING_MASK]: (state, { payload: { loading } }) => {
    return state.setIn(['ui', 'loading'], loading);
  },
}, initialState);

const getConferenceSuccess = createAction(GET_CONFERENCE_SUCCESS, (conference) => ({ conference }));
const getSettingsSuccess = createAction(GET_SETTINGS_SUCCESS, (settings) => ({ settings }));
const getGlobalDataSuccess = createAction(GET_GLOBAL_DATA_SUCCESS);
export const toggleLoadingMask = createAction(TOGGLE_LOADING_MASK, (loading) => ({ loading }));

export const getConference = () => {
  return async function (dispatch, getState, { api }) {
    try {
      const { data } = await api.get(`/conferences/${process.env.REACT_APP_CONFERENCE_ID}`);
      dispatch(getConferenceSuccess(data));
      dispatch(getGlobalData());
    } catch (err) {
      message.error(err.message, 5);
    }
  };
};

export const getGlobalData = () => {
  return async function (dispatch, getState, { api }) {
    try {
      const response = await Promise.all([
        api.get('/global_settings/'),
      ]);

      const settings = arrayToObject(get(response, '[1].data', []), 'slug');

      dispatch(getSettingsSuccess(settings));
      dispatch(getGlobalDataSuccess());
    } catch (err) {
      message.error(err.message, 5);
    }
  };
};

export default reducer;
