import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider, addLocaleData } from 'react-intl';
import arLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import translations from 'i18n/locales';
import { selectLocale } from './selectors';

addLocaleData(arLocaleData);
addLocaleData(enLocaleData);

class LanguageProvider extends React.PureComponent {
  render() {
    const { locale } = this.props;
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: selectLocale(),
});

export default connect(mapStateToProps)(LanguageProvider);
