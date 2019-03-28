import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const SET_LOCALE = 'modules/translations/SET_LOCALE';

const defaultLocale = 'en';
// const { pathname } = window.location;

// if (pathname.includes('/es')) {
//   defaultLocale = 'es';
// }

const initialState = fromJS({
  locale: defaultLocale,
});

const reducer = handleActions({
  [SET_LOCALE]: (state, action) => {
    return state.set('locale', action.payload.locale);
  },
}, initialState);

export const setLocale = createAction(SET_LOCALE, (locale) => ({ locale }));

export default reducer;
