import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  text-align: center;
  > h1 {
    margin-top: 20px;
    font-weight: 300;
    font-size: 2.5em;
    margin: 25px 0;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledWrapper>
        <h1 className="boom">Welcome Autobot<br />{process.env.REACT_APP_HOST}</h1>
      </StyledWrapper>
    );
  }
}

export default App;
