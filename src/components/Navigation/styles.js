import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  height: 65px;
`;

export const StyledBrand = styled.div`
  display: inline-flex;
  align-items: center;
  > img {
    width: 50px;
    margin-right: 10px;
  }
  > p {
    font-size: 1.6em;
    line-height: 1em;
    font-weight: 500;
    @media (max-width: 480px) {
      display: none;
    }

    > span {
      color: ${(props) => props.theme.navigation.textColor};
    }
  }
`;

export const StyledMenus = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  > li {
    margin: 0 10px;
  }
  @media (max-width: 1080px) {
    background: #ffffff;
    position: fixed;
    width: 300px;
    right: 0;
    top: 0;
    height: 100vh;
    flex-direction: column;
    padding: 80px 30px 30px;
    z-index: 10;
    -webkit-box-shadow: -2px 0px 32px -7px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 0px 32px -7px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 0px 32px -7px rgba(0, 0, 0, 0.3);
    transform: translate(310px, 0);
    transition: transform 0.25s ease-in-out;
    will-change: transform;
    > li {
      display: block;
      margin: 0 0 15px 0;
      width: 100%;
      text-align: center;
    }
    ${(props) =>
    props.visible &&
      `
      transform: translate(0, 0);
    `}
  }
`;

export const StyledNavItems = styled(NavLink)`
  font-size: 1.6em;
  text-transform: capitalize;
  font-weight: 400;
`;

export const StyledNavButton = styled(Link)`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 0.8em 1.3em;
  transition: opacity 0.2s;
  cursor: pointer;
  display: inline-block;
  color: ${(props) => props.theme.button.textColor} !important;
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  box-shadow: rgba(0, 15, 102, 0.15) 3px 3px 0px 0px;
  transition: all 0.25s ease 0s;
  &:hover {
    box-shadow: rgba(0, 15, 102, 0.25) 3px 3px 0px 0px;
    background: ${(props) => props.theme.button.hoveredBg};
  }
  @media (max-width: 1080px) {
    width: 100%;
    display: block;
  }
`;

export const StyledToggler = styled.button`
  width: 35px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 11;
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
  > span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #000000;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  > span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  > span:nth-child(2) {
    top: 10px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  > span:nth-child(3) {
    top: 20px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  ${(props) =>
    props.visible &&
    `
    > span:nth-child(1) {https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/49769290_606162513149569_6817845825998159872_n.jpg?_nc_cat=1&_nc_pt=1&_nc_ht=scontent.fmnl3-2.fna&oh=715f8acf04c999ba9d52cc215bc1feac&oe=5CD18945
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: -3px;
      left: 5px;
    }
    > span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    > span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 22px;
      left: 5px;
    }
  `}
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
  ${(props) =>
    props.visible &&
    `
    visibility: visible;
    opacity: 1;
  `}
`;
