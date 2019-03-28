import { createSelector } from 'reselect';

const selectGlobalDomain = (state) => state.get('global');

export const selectAppLoading = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'loading']),
);

export const selectGlobalSettings = () => createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['data', 'settings']).toJS(),
);
