import { createSelector } from 'reselect';
import _ from 'lodash';

const selectGlobalDomain = (state) => state.get('global');

export const selectAppLoading = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'loading']),
);

export const selectTotal = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'total']),
);

const getVehicleDetails = (list) => {
  return _.map(list, (item) => {
    return {
      name: _.get(item, 'name') || '',
      model: _.get(item, 'model') || '',
      manufacturer: _.get(item, 'manufacturer') || '',
      vehicleClass: _.get(item, 'vehicle_class') || '',
    };
  });
};

export const selectPeople = createSelector(
  selectGlobalDomain,
  (state) => {
    const list = state.getIn(['data', 'people']).toJS();
    return _.map(list, (item) => {
      const vehicleDetails = _.get(item, 'vehicleDetails') || [];

      return {
        id: _.get(item, 'id') || '',
        name: _.get(item, 'name') || '',
        height: _.get(item, 'height') || '',
        mass: _.get(item, 'mass') || '',
        gender: _.get(item, 'gender') || '',
        edited: _.get(item, 'edited') || '',
        vehicleIds: _.get(item, 'vehicleIds') || '',
        vehicleDetails: getVehicleDetails(vehicleDetails),
      };
    });
  },
);

export const selectPreview = createSelector(
  selectGlobalDomain,
  selectPeople,
  (state, people) => {
    const id = state.getIn(['ui', 'preview']);
    const person = _.find(people, { id }) || {};

    return _.get(person, 'vehicleDetails') || [];
  },
);
