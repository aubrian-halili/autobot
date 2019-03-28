import { css } from 'styled-components';

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

/*
The breakpoints of responsive
grid follow BootStrap 4
media queries rules
*/

export const mediaMin = {
  phone: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)}
    }
  `,
  phoneL: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  dekstop: (...args) => css`
    @media (min-width: 1600) {
      ${css(...args)}
    }
  `,
};

export const mediaMax = {
  phone: (...args) => css`
    @media (max-width: 575.98px) {
      ${css(...args)}
    }
  `,
  phoneL: (...args) => css`
    @media (max-width: 767.98px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 991.98px) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 1199.98px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1599.98px) {
      ${css(...args)}
    }
  `,
};
