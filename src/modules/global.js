import { fromJS } from 'immutable';
import _ from 'lodash';
import { createAction, handleActions } from 'redux-actions';
import { message } from 'antd';
import { getIdFromUrl } from 'common/helpers';
import { selectPeople } from 'common/selectors';

const GET_PEOPLE = 'modules/global/GET_PEOPLE';
const GET_VEHICLES = 'modules/global/GET_VEHICLES';
const SET_TOTAL = 'modules/global/SET_TOTAL';
const SET_PREVIEW = 'modules/global/SET_PREVIEW';
const TOGGLE_LOADING_MASK = 'modules/global/TOGGLE_LOADING_MASK';

const initialState = fromJS({
  ui: {
    preview: '',
    loading: false,
    total: 0,
  },
  data: {
    people: [],
  },
});

const reducer = handleActions({
  [GET_PEOPLE]: (state, { payload: { people } }) => state.setIn(['data', 'people'], fromJS(people)),
  [GET_VEHICLES]: (state, { payload: { id, data } }) => {
    const people = state.getIn(['data', 'people']);

    return state.setIn(['data', 'people'],
      people.update(people.findIndex((item) => item.get('id') === id),
        (person) => person.merge(data)));
  },
  [SET_PREVIEW]: (state, { payload: { id } }) => state.setIn(['ui', 'preview'], id),
  [SET_TOTAL]: (state, { payload: { total } }) => state.setIn(['ui', 'total'], total),
  [TOGGLE_LOADING_MASK]: (state, { payload: { loading } }) => state.setIn(['ui', 'loading'], loading),
}, initialState);

export const getPeopleAction = createAction(GET_PEOPLE, (people) => ({ people }));
export const getVehiclesAction = createAction(GET_VEHICLES, (id, data) => ({ id, data }));
export const toggleLoadingMaskAction = createAction(TOGGLE_LOADING_MASK, (loading) => ({ loading }));
export const setPreviewAction = createAction(SET_PREVIEW, (id) => ({ id }));
export const setTotalAction = createAction(SET_TOTAL, (total) => ({ total }));

export const getPeopleAsync = (params = {}) => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(toggleLoadingMaskAction(true));
      const resp = await api.get('/people/', { params });

      const data = _.get(resp, 'data') || {};
      const total = _.get(data, 'count') || 0;
      let results = _.get(data, 'results') || [];
      results = _.map(results, (item) => {
        const url = _.get(item, 'url') || '';
        const vehicles = _.get(item, 'vehicles') || [];

        return {
          ...item,
          id: getIdFromUrl(url),
          vehicleIds: _.map(vehicles, getIdFromUrl),
        };
      });
      dispatch(getPeopleAction(results));
      dispatch(setTotalAction(total));
    } catch (err) {
      message.error(err.message);
    } finally {
      dispatch(toggleLoadingMaskAction(false));
    }
  };
};

export const getVehiclesAsync = (id) => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(toggleLoadingMaskAction(true));
      const people = selectPeople(getState());
      const person = _.find(people, { id }) || {};
      const vehicleIds = _.get(person, 'vehicleIds') || [];

      const resp = await Promise.all(_.map(vehicleIds, (identity) => {
        return api.get(`/vehicles/${identity}`);
      }) || []);
      const results = _.map(resp, 'data');
      dispatch(getVehiclesAction(id, { vehicleDetails: results }));
    } catch (err) {
      message.error(err.message);
    } finally {
      dispatch(toggleLoadingMaskAction(false));
    }
  };
};

export default reducer;
