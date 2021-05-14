import cuid from 'cuid';

const defaultPopupTemplateStyles = {
  'popup-outer-circle': {
    uniqueKey: cuid(),
    slot: { textContent: '' },
    attribute: { placeholder: '', classList: ['popup-block', 'fadeInDown'] },
    styles: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'rgb(0, 0, 0)',
      borderRadius: '200px',
      height: '400px',
      width: '400px',
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '4px',
      borderStyle: 'solid',
      direction: 'ltr',
    },
  },
  'popup-inner-circle': {
    slot: { textContent: '' },
    attribute: { placeholder: '' },
    styles: {
      color: 'rgb(0, 0, 0)',
      position: 'unset',
      borderRadius: '190px',
      height: '380px',
      width: '380px',
      backgroundColor: 'rgb(223, 122, 94)',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '0px',
      borderStyle: 'solid',
      transform: 'translate(5.59998px, 5.60001px)',
      direction: 'ltr',
    },
  },
  'popup-star-1': {
    slot: { textContent: '&star;' },
    attribute: { placeholder: '' },
    styles: {
      color: '#c85842',
      position: 'absolute',
      textAlgn: 'center',
      backgroundColor: 'transparent',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '0px',
      borderstyle: 'solid',
      transform: 'translate(119px, 18px)',
      textAlign: 'center',
      fontSize: '35px',
      direction: 'ltr',
    },
  },
  'popup-star-2': {
    slot: { textContent: '&star;' },
    attribute: { placeholder: '' },
    styles: {
      color: '#c85842',
      position: 'absolute',
      textAlgn: 'center',
      backgroundColor: 'transparent',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '0px',
      borderstyle: 'solid',
      transform: 'translate(227px, 13px)',
      textAlign: 'center',
      fontSize: '35px',
      direction: 'ltr',
    },
  },
  'popup-star-3': {
    slot: { textContent: '&star;' },
    attribute: { placeholder: '' },
    styles: {
      color: '#c85842',
      position: 'absolute',
      textAlgn: 'center',
      backgroundColor: 'transparent',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '0px',
      borderstyle: 'solid',
      transform: 'translate(174px, 0px)',
      textAlign: 'center',
      fontSize: '35px',
      direction: 'ltr',
    },
  },
  'popup-text-1': {
    slot: { textContent: 'Get a Discount for shopping <br />with us' },
    attribute: { placeholder: '' },
    styles: {
      color: '#ffffff',
      position: 'absolute',
      textAlgn: 'center',
      backgroundColor: 'transparent',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '0px',
      borderstyle: 'solid',
      transform: 'translate(38.4001px, 87.8px)',
      textAlign: 'center',
      fontSize: '25px',
      direction: 'ltr',
    },
  },
  'popup-text-2': {
    slot: { textContent: 'Get a Discount for shopping with us' },
    attribute: { placeholder: '' },
    styles: {
      color: '#ffffff',
      position: 'absolute',
      textAlgn: 'center',
      backgroundColor: 'transparent',
      borderColor: 'rgb(223, 122, 94)',
      borderWidth: '0px',
      borderstyle: 'solid',
      transform: 'translate(73.0999px, 174.8px)',
      textAlign: 'center',
      fontSize: '15px',
      direction: 'ltr',
    },
  },
  'popup-input-1': {
    slot: { textContent: '' },
    attribute: { placeholder: 'Enter Your Text Here' },
    styles: {
      transform: 'translate(77.0147px, 167.846px)',
      borderRadius: '2px',
      height: '50.5px',
      lineHeight: '1.5',
      fontSize: '18px',
      fontFamily: 'Poppins',
      background: 'white',
      paddingRight: '10px',
      paddingLeft: '10px',
      direction: 'rtl',
    },
  },
  'popup-button': {
    slot: { textContent: 'Lets Go ljsoiuoisg' },
    attribute: { placeholder: '' },
    styles: {
      transform: 'translate(46.0412px, 173.587px)',
      borderRadius: '2px',
      lineHeight: '1.5',
      fontSize: '18px',
      color: '#ffffff',
      fontFamily: 'Poppins',
      background: '#000000',
      paddingRight: '10px',
      paddingLeft: '10px',
      direction: 'ltr',
      width: '300px',
      height: '50.5px',
      backgroundColor: '#000000',
    },
  },
};

export const editables = {
  text: ['textContent', 'color', 'fontSize'],
  outerCirlce: ['backgroundColor', 'borderColor', 'animationClass'],
  circle: ['backgroundColor', 'borderColor'],
  input: ['placeholder', 'direction'],
  button: ['backgroundColor', 'textContent', 'color'],
};

export default defaultPopupTemplateStyles as Record<string, Record<string, unknown>>;