
import styled, { keyframes } from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: ${(props) => props.theme.loadingBg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const StyledCircle = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #1890ff;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #a8d5ff;
    -webkit-animation: ${spin} 3s linear infinite;
    animation: ${spin} 3s linear infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #1890ff;
    -webkit-animation: ${spin} 1.5s linear infinite;
    animation: ${spin} 1.5s linear infinite;
  }
`;

export const StyledText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  margin-top: 20px !important;
  max-width: 250px;
  width: 100%;
`;
