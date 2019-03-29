import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {
  StyledNav,
  StyledBrand,
  StyledMenus,
  StyledNavButton,
  StyledToggler,
  StyledOverlay,
} from './styles';

class Navigation extends React.Component {
  state = {
    visible: false,
  };

  componentWillUpdate(nextProps, nextState) {
    if (this.state.visible !== nextState.visible) {
      const body = document.body;
      if (nextState.visible) body.style.overflow = 'hidden';
      else body.style.overflow = 'auto';
    }
  }

  toggleMenu = (e) => {
    e.stopPropagation();
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { theme } = this.props;
    const { visible } = this.state;
    return (
      <StyledNav id="top">
        <StyledBrand>
          <p dangerouslySetInnerHTML={{ __html: theme.navigation.details }} />
        </StyledBrand>
        <StyledToggler visible={visible} onClick={this.toggleMenu}>
          <span />
          <span />
          <span />
        </StyledToggler>
        <StyledMenus visible={visible}>
          <li>
            <StyledNavButton to="/">Home</StyledNavButton>
          </li>
        </StyledMenus>
        <StyledOverlay visible={visible} onClick={this.toggleMenu} />
      </StyledNav>
    );
  }
}

Navigation.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Navigation);
