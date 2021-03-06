import { keyframes } from 'styled-components';

/**
 * Global constants: Colors, animations, grid, etc
 */


const grid = {
  columns: [37,24,16,11,7,5],
  columnsReverse: [5,7,11,16,24,37],
  rows: [3,5,7,10,16,24,36],
  rowWidthFix: [0,5,0,0,0,2]
};

const type = {
  baseSize: '1.2rem',
  smaller: '1rem'
};

const spacing = {
  padding: {
    smaller: '0.25rem',
    normal: '0.6rem',
    bigger: '0.75rem'
  }
};

const breakpoints = {
  mobile: '900px'
}

const animations = {
  borderIn: keyframes`
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  `,
  scaleIn: keyframes`
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  growIn: keyframes`
    from {
      width: 100%;
    }
    to {
      width: 40%;
    }
  `,
  growUp: keyframes`
    from {
      height: inherit;
    }
    to {
      height: 200px;
    }
  `,
  starScale: keyframes`
    0% {
      width: 60%;
    }
    20% {
      width: 150%;
    }
    40% {
      width: 300%;
    }
    60% {
      width: 600%;
    }
    80% {
      width: 1100%;
    }
    100% {
      width: 900%;
    }
  `,
  show: keyframes`
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  `,
  showBg: keyframes`
    from {
      background-color: ${props => props.theme.bg};
    }
    to {
      background-color: ${props => props.theme.fg};
    }
  `,
};


export { grid, type, spacing, animations, breakpoints };
