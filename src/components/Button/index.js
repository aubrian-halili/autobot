import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000000;
  background-color: ${(props) => props.theme.colors.gray};
  border: 1px solid ${(props) => props.theme.colors.gray};
  font-weight: 600;
  padding: 0.5em 2em;
  transition: opacity 0.2s;
  cursor: pointer;
  display: inline-block;
  box-shadow: rgba(0, 15, 102, 0.1) 3px 3px 0px 0px;
  transition: all 0.25s ease 0s;

  &:hover {
    box-shadow: rgba(0, 15, 102, 0.25) 3px 3px 0px 0px;
    background: ${(props) => props.theme.button.hoveredBg};
  }

  ${(props) => (props.primary && `
    color: ${props.theme.button.textColor};
    background-color: ${props.theme.primary};
    border-color: ${props.theme.primary};
  `)}
  ${(props) => (props.secondary && `
    color: ${props.theme.button.textColor};
    background-color: ${props.theme.secondary};
    border-color: ${props.theme.secondary};
  `)}
  ${(props) => (props.disabled && `
    pointer-events: none;
    opacity: 0.8;
    color: #444444;
    cursor: not-allowerd;
  `)}
`;

export default StyledButton;
