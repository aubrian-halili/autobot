export const colors = {
  gray: '#f1f1f1',
  red: '#FC2627',
  orange: '#FC5915',
  green: '#83B01E',
  lightBlue: '#89CBC4',
};

export const base = {
  colors,
};

export const defaultTheme = {
  ...base,
  primary: '#f9521d',
  secondary: '#feb317',
  textColor: '#001166',
  navigation: {
    textColor: '#f9521d',
    details: '<b>Autobot</b>',
    borderColor: '#feb317',
  },
  header: {
    titleFont: 'Argon, Lato, Arial',
    textColor: '#001166',
    bgColor: '#FFF7D3',
  },
  button: {
    textColor: '#fff',
    hoveredBg: '#f76c42',
  },
  footer: {
    logo: `${process.env.PUBLIC_URL}/logo.svg`,
    textColor: '#f9521d',
    details: '<b>Autobot</b>',
    borderColor: '#feb317',
    hashtag: '#Autobot',
  },
  location: {
    venue: 'Fira de Barcelona Montjuïc',
    address: 'Avinguda de la Reina Maria Cristina, s/n, 08004 Barcelona, Spain',
  },
};
