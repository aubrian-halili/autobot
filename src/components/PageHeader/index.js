/**
*
* Hero
*
*/

import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.header.bgColor};
  padding: 5em 3em;
  color: #fff;
  color: ${(props) => props.theme.header.textColor};
  text-align: center;
  font-size: 10px;
  @media (max-width: 1200px) {
    font-size: 9px;
  }
  @media (max-width: 991px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 7px;
  }
  @media (max-width: 375px) {
    font-size: 5.8px;
  }

  h1 {
    font-size: 7.5em;
    margin: 0 0 0.2em;
    color: inherit;
    letter-spacing: 1px;
    line-height: 1em;
    margin-bottom: 5px;
    font-family: ${(props) => props.theme.header.titleFont};
  }

  p {
    font-size: 2.3em;
    font-weight: bold;
    margin: 0;
    color: inherit;
  }
`;

export default StyledHeader;
