import React from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import { withTheme } from 'styled-components';
import {
  StyledWrapper,
  StyledText,
  StyledDivider,
  StyledDate,
  StyledHashtag,
  StyledHashtagMobile,
  StyledUpButton,
  StyledCopyRight,
  StyledFooterContainer,
  StyledSocial,
  StyledTermsWrapper,
  StyledCopyWrapper,
  StyledConditionsWrapper,
} from './styles';

class Footer extends React.PureComponent {
  state = {
    wechat: false,
  };

  onScroll = () => {
    const navigation = document.querySelector('#top');
    scrollToComponent(navigation);
    navigation.focus();
  };

  toggleWeChat = () => {
    this.setState({ wechat: !this.state.wechat });
  };

  render() {
    const { theme } = this.props;
    return (
      <StyledWrapper>
        <section>
          <StyledFooterContainer>
            <StyledDate>
            </StyledDate>
            <StyledSocial>
              <StyledHashtag large padding="0 10px 0 0">
                {theme.footer.hashtag}
              </StyledHashtag>
              <a
                href="https://github.com/aubrian-halili/autobot"
                target="blank"
              >
                <i className="fab fa-github" />
              </a>
              <StyledUpButton onClick={this.onScroll}>
                Back to top ↑
              </StyledUpButton>
              <StyledHashtagMobile large padding="0 10px 0 0">
                #AWasia
              </StyledHashtagMobile>
            </StyledSocial>
          </StyledFooterContainer>
          <StyledDivider />
          <StyledTermsWrapper className="copy">
            <StyledConditionsWrapper>
              <StyledText>
              </StyledText>
            </StyledConditionsWrapper>
            <StyledCopyWrapper>
              <StyledCopyRight>
                Autobot is brought to you by{' '}
                <a href="http://autobot.com/" target="blank">
                  Aubrian Halili.
                </a>
              </StyledCopyRight>
            </StyledCopyWrapper>
          </StyledTermsWrapper>
        </section>
      </StyledWrapper>
    );
  }
}

Footer.propTypes = {
  isBoothsIntro: PropTypes.bool,
  theme: PropTypes.object.isRequired,
};

Footer.defaultProps = {
  isBoothsIntro: false,
};

export default withTheme(Footer);
