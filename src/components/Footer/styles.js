import styled from 'styled-components';
import { Modal } from 'antd';
import { mediaMax } from 'themes/helpers';

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-right: 10px;
  @media (max-width: 875px) {
    margin: auto;
  }
`;

export const StyledLogo = styled.img.attrs((props) => ({
  src: props.theme.footer.logo,
}))`
  margin-right: 10px;
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: inline-block;
  @media (max-width: 875px) {
    margin: 0 0 10px;
  }
`;

export const StyledWrapper = styled.footer`
  padding: 45px 20px;
  border-top: 1px solid ${(props) => props.theme.footer.borderColor};
  @media (max-width: 875px) {
    padding: 25px 10px;
  }
  > section {
    max-width: 1226px;
    width: 100%;
    margin: auto;

    i {
      color: ${(props) => props.theme.textColor};
      font-size: 25px;
      margin-right: 10px;
    }
    h3 {
      font-size: 3.6em;
      font-weight: 300;
      color: ${(props) => props.theme.textColor};
      margin: 0 30px 0 10px;
      text-transform: uppercase;
    }
    header {
      a i {
        font-size: 26px;
        margin: 0 11px;

        &:hover {
          color: ${(props) => props.theme.textColor};
        }
      }
    }
  }
  footer {
    a {
      color: ${(props) => props.theme.textColor};
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 875px) {
    .copy {
      justify-content: center;
      p {
        text-align: center;
      }
    }
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 0 !important;
  }
`;

export const StyledText = styled.div`
  font-size: ${(props) => (props.large ? '1.8em' : '1.5em')};
  color: ${(props) => props.theme.textColor};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  padding: ${({ padding }) => (padding && padding) || '0'};
  a {
    margin: 0.5em;
    font-size: 14px;
  }
  span {
    color: ${(props) => props.theme.footer.textColor};
  }
  @media (max-width: 699px) {
    text-align: center;
  }
`;

export const StyledDivider = styled.span`
  width: 100%;
  background: #c5c8dc;
  height: 1px;
  display: block;
  margin: 20px 0 10px;
`;

export const StyledDate = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 875px) {
    display: block;
  }
  div {
    @media (max-width: 875px) {
      justify-content: center;
    }
  }
`;

export const StyledHashtag = styled.p`
  font-size: ${(props) => (props.large ? '1.8em' : '1.6em')};
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  padding: ${({ padding }) => (padding && padding) || '0'};
  @media (max-width: 875px) {
    display: none;
  }
  ${mediaMax.phone`
    font-size: ${(props) => (props.large ? '1.6em' : '1.4em')};
  `};
`;

export const StyledHashtagMobile = styled.p`
  font-size: ${(props) => (props.large ? '1.8em' : '1.6em')};
  font-weight: 600;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  padding: ${({ padding }) => (padding && padding) || '0'};
  display: none;
  ${mediaMax.phone`
    font-size: ${(props) => (props.large ? '1.6em' : '1.4em')};
  `};
  @media (max-width: 875px) {
    display: block;
  }
`;

export const StyledUpButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.footer.textColor};
  cursor: pointer;
  @media (max-width: 875px) {
    display: block;
    margin: 0 auto;
    padding: 0.5em;
  }
`;

export const StyledCopyRight = styled.div`
  font-size: 14px;
  max-width: 515px;
  text-align: right;
  color: ${(props) => props.theme.textColor};
  @media (max-width: 699px) {
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.footer.textColor};
    font-weight: 600;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 875px) {
    display: block;
    text-align: center;
  }
`;

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 875px) {
    display: block;
    text-align: center;
    margin: 10px;
  }
  a > i {
    margin: 0 11px;
    font-size: 20px;
    &:hover {
      color: ${(props) => props.theme.footer.textColor};
    }
  }
`;

export const StyledDot = styled.span`
  color: ${(props) => props.theme.footer.textColor};
  margin: 0 2px;
`;

export const StyledTermsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledCopyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledConditionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
