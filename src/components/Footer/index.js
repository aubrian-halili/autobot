import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import { withTheme } from 'styled-components';
import {
  StyledLogoWrapper,
  StyledLogo,
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
  StyledDot,
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
    const { isBoothsIntro, theme } = this.props;
    return (
      <StyledWrapper>
        <section>
          <StyledFooterContainer>
            <StyledDate>
              <StyledLogoWrapper>
                <StyledLogo alt="logo" />
              </StyledLogoWrapper>
              <StyledText
                style={{ marginTop: '5px' }}
                dangerouslySetInnerHTML={{ __html: theme.footer.details }}
              />
            </StyledDate>
            <StyledSocial>
              <StyledHashtag large padding="0 10px 0 0">
                {theme.footer.hashtag}
              </StyledHashtag>
              <a
                href="https://www.facebook.com/autobot/"
                target="blank"
              >
                <i className="fab fa-facebook" />
              </a>
              <a href="https://twitter.com/Autobot" target="blank">
                <i className="fab fa-twitter-square" />
              </a>
              <a href="https://www.instagram.com/Autobot/" target="blank">
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.youtube.com/autobot"
                target="blank"
              >
                <i className="fab fa-youtube " />
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
                <strong>
                  <a
                    href="https://autobot.com/blog/"
                    target="blank"
                  >
                    Blog
                  </a>
                  <StyledDot>•</StyledDot>
                </strong>
                <strong>
                  {isBoothsIntro ? (
                    <Link to="/">
                      Terms and Conditions
                    </Link>
                  ) : (
                    <Link to="/">
                      Terms and Conditions
                    </Link>
                  )}
                  <StyledDot>•</StyledDot>
                  <Link to="/">Privacy Policy</Link>
                  <StyledDot>•</StyledDot>
                  <Link to="/">Cookie Declaration</Link>
                  <StyledDot>•</StyledDot>
                </strong>
                <p
                  style={{
                    fontSize: '14px',
                    display: 'inline',
                    marginLeft: '5px',
                  }}
                >
                  Contact us at:&nbsp;{' '}
                </p>
                <strong>
                  <a href="mailto:info@autobot.com">info@autobot.com</a>
                </strong>
              </StyledText>
            </StyledConditionsWrapper>
            <StyledCopyWrapper>
              <StyledCopyRight>
                Autobot is brought to you by{' '}
                <a href="http://autobot.com/" target="blank">
                  Autobot Ltd.
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
