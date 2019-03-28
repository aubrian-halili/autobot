import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;

  > h1 {
    color: #fff;
    font-size: 2.5em;
    text-transform: uppercase;
    margin-bottom: 0;
    font-weight: 400;
  }
  > a {
    color: #fff;
    margin-top: 10px;
    font-size: 1.2em;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NotFoundPage = () => (
  <StyledWrapper>
    <h1>404 | page not found</h1>
    <NavLink to="/">
      Go back to homepage
    </NavLink>
  </StyledWrapper>
);

export default NotFoundPage;
