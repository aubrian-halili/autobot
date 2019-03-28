import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledCircle, StyledText } from './styles';

const LoadingMask = ({ text }) => (
  <StyledWrapper>
    <StyledCircle />
    <StyledText>{text}</StyledText>
  </StyledWrapper>
);

LoadingMask.propTypes = {
  text: PropTypes.string,
};

LoadingMask.defaultProps = {
  text: 'Loading, please wait...',
};

export default LoadingMask;
