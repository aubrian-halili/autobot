import { createSelector } from 'reselect';

const selectTranslations = (state) => state.get('translations');

const selectLocale = () => createSelector(
  selectTranslations,
  (state) => state.get('locale')
);

export {
  selectLocale,
};
