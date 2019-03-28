import { createSelector } from 'reselect';
import _ from 'lodash';

const selectGlobalDomain = (state) => state.get('global');

export const selectAppLoading = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'loading']),
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
      const vehicles = _.get(item, 'vehicleDetails') || [];

      return {
        id: _.get(item, 'id') || '',
        name: _.get(item, 'name') || '',
        height: _.get(item, 'height') || '',
        mass: _.get(item, 'mass') || '',
        gender: _.get(item, 'gender') || '',
        edited: _.get(item, 'edited') || '',
        vehicles: getVehicleDetails(vehicles),
      };
    });
  },
);
