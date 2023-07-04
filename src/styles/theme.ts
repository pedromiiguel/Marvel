export default {
  grid: {
    container: '128rem',
    gutter: '1.6rem'
  },
  border: {
    radius: '1.6rem'
  },
  box: {
    shadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },
  font: {
    family: 'Poppins, sans-serif',
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
    white: '#fff',
    gray_50: '#F3F5F6',
    gray_200: '#737380',
    gray_300: '#5D5D6D',
    gray_800: '#202024',
    black: '#0D0D0D',
    red: '#EC1D24'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
