const url = 'http://poptin.ucej.tech/backend/popup.php';

let POPUPID = '';

const styleSheetLink = 'http://poptin.ucej.tech/_animation.css';

const jsUrl = new URL(document.querySelector('[data-name="poptin"]').getAttribute('src'));
POPUPID = jsUrl.search.split('=')[1];

let popupLoaded = false;
let popupContent = '';

fetch(`${url}?popup_id=${POPUPID}`).then(async (res) => {
  const popupResponse = JSON.parse(await res.text());
  if (popupResponse.error) {
    console.log(`Could not load popup: ${popupResponse.msg}`);
  } else {
    popupLoaded = true;
    popupContent = popupResponse.content;
  }
});

const dStyle = {
  dModal: `
      display: none;
      position: fixed;
      z-index: 1000;
      padding-top: 20px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.4);
    `,
  dModalContent: `
      background-color: transparent;
      margin: auto;
      padding: 20px;
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  dModalClose: `
      color: #aaaaaa;
      position: absolute;
      top: 5%;
      right: 8%;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    `,
  dIframe: `
      display: block;
      border: none;
      height: 100%;
      width: 100%;
      z-index: 99999;
    `,
};

// Element Creation
function createAnElement(parentId, elementTag, elementId, style, html = null) {
  const createdElement = document.createElement(elementTag);
  if (style) createdElement.style.cssText = style;

  if (html) createdElement.innerHTML = html;
  createdElement.setAttribute('id', elementId[0]);
  if (elementId.length > 1) {
    elementId.shift();
    elementId.map((item) => {
      createdElement.setAttribute(`${item[0]}`, `${item[1]}`);
    });
  }
  if (parentId === 'pass') {
    document.body.appendChild(createdElement);
  } else document.getElementById(parentId).appendChild(createdElement);
}

// Remove
function removeElement(elementId) {
  const element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
function g() {
  document.getElementById('myModal').style.display = 'none';
  removeElement('dFrame');
}
// click Modal
function closeOnModal(event) {
  if (event.target === document.getElementById('myModal')) {
    g();
  }
}
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  removeElement('dFrame');
}

function loadPopup(content) {
  createAnElement('myModal', 'div', ['myModal2'], dStyle.dModalContent);

  // Create close button
  createAnElement(
    'myModal2',
    'span',
    ['dClose', ['onclick', 'g()']],
    dStyle.dModalClose,
    '&times;',
  );

  document.getElementById('myModal').style.cssText = dStyle.dModal;
  // Append Content
  // console.log(content)
  document.getElementById('myModal2').innerHTML += content;
  document.getElementById('myModal').style.display = 'block';
}

window.onload = document.addEventListener(
  'DOMContentLoaded',
  () => {
    const bodyDocument = document.getElementsByTagName('body')[0];
    bodyDocument.setAttribute('onclick', 'closeOnModal');
    // add animation stylesheet
    createAnElement('pass', 'link', [
      'animation-link',
      ['rel', 'stylesheet'],
      ['href', styleSheetLink],
    ]);
    // Create Modal
    createAnElement('pass', 'div', ['myModal'], 'display: none');
    setTimeout(() => {
      if (popupLoaded) {
        loadPopup(popupContent);
      }
    }, 1000);
  },
  false,
);
