import { fromJS } from 'immutable';
import _ from 'lodash';
import { createAction, handleActions } from 'redux-actions';
import { message } from 'antd';
import { getIdFromUrl, getPerson } from 'common/helpers';

const GET_PEOPLE = 'modules/global/GET_PEOPLE';
const GET_PERSON_VEHICLES = 'modules/global/GET_PERSON_VEHICLES';
const TOGGLE_LOADING_MASK = 'modules/global/TOGGLE_LOADING_MASK';

const initialState = fromJS({
  ui: {
    loading: false,
  },
  data: {
    people: [],
  },
});

const reducer = handleActions({
  [GET_PEOPLE]: (state, { payload: { people } }) => state.setIn(['data', 'people'], fromJS(people)),
  [GET_PERSON_VEHICLES]: (state, { payload: { id, data } }) => {
    const people = state.getIn(['data', 'people']);

    return state.setIn(['data', 'people'],
      people.update(people.findIndex((item) => item.get('id') === id),
        (person) => person.merge(data)));
  },
  [TOGGLE_LOADING_MASK]: (state, { payload: { loading } }) => {
    return state.setIn(['ui', 'loading'], loading);
  },
}, initialState);

const getPeopleAction = createAction(GET_PEOPLE, (people) => ({ people }));
const getPersonVehiclesAction = createAction(GET_PERSON_VEHICLES, (id, data) => ({ id, data }));
export const toggleLoadingMaskAction = createAction(TOGGLE_LOADING_MASK, (loading) => ({ loading }));

export const getPeopleAsync = (param = {}) => {
  return async function (dispatch, getState, { api }) {
    try {
      const resp = await api.get('https://swapi.co/api/people/', param);
      let results = _.get(resp, 'data.results') || [];
      results = _.map(results, (item) => {
        const url = _.get(item, 'url') || '';
        const id = getIdFromUrl(url);

        return _.set(item, 'id', id);
      });
      dispatch(getPeopleAction(results));
    } catch (err) {
      message.error(err.message, 5);
    }
  };
};

export const getPersonVehiclesAsync = (id) => {
  return async function (dispatch, getState, { api }) {
    try {
      const person = getPerson(getState(), id);
      const vehicles = _.get(person, 'vehicles') || [];
      const vehicleIds = _.map(vehicles, getIdFromUrl);

      const resp = await Promise.all(_.map(vehicleIds, (identity) => {
        return api.get(`https://swapi.co/api/vehicles/${identity}`);
      }) || []);
      const results = _.map(resp, 'data');
      dispatch(getPersonVehiclesAction(id, { vehicleDetails: results }));
    } catch (err) {
      message.error(err.message, 5);
    }
  };
};

export default reducer;
