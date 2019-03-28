import { createSelector } from 'reselect';

const selectGlobalDomain = (state) => state.get('global');

export const selectAppPending = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'appPending']),
);

export const selectAppTheme = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'appTheme']),
);

export const selectAppLoading = createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['ui', 'loading']),
);

export const selectGlobalSettings = () => createSelector(
  selectGlobalDomain,
  (state) => state.getIn(['data', 'settings']).toJS(),
);
