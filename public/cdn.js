const dStyle = {
  dModal: `
      display: none;
      position: fixed;
      z-index: 1;
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
      background-color: #fefefe;
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
    `
};

let POPUPID = "";

window.onload = document.addEventListener(
  "DOMContentLoaded",
  () => {
    const url = new URL(document.querySelector('[data-name="poptin"]').getAttribute("src"));
    POPUPID = url.search.split("=")[1];

    const bodyDocument = document.getElementsByTagName("body")[0];
    bodyDocument.setAttribute("onclick", "closeOnModal()");
    // Create Modal
    createAnElement("pass", "div", ["myModal"], "display: none");
    setTimeout(() => {
      openIframe();
    }, 1000);
  },
  false
);

function openIframe() {
  // Create Modal-Content card
  createAnElement("myModal", "div", ["myModal2"], dStyle.dModalContent);

  // Create close button
  createAnElement(
    "myModal2",
    "span",
    ["dClose", ["onclick", "g()"]],
    dStyle.dModalClose,
    "&times;"
  );

  document.getElementById("myModal").style.cssText = dStyle.dModal;
  // Create Iframe
  createAnElement(
    "myModal2",
    "iframe",
    ["dFrame", ["src", `http://poptin.ucejt.tech/popups/${POPUPID}/public.html`]],
    dStyle.dIframe
  );
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  removeElement("dFrame");
}

// click Modal
function closeOnModal() {
  if (event.target == document.getElementById("myModal")) {
    g();
  }
}

function g() {
  document.getElementById("myModal").style.display = "none";
  removeElement("dFrame");
}

// Element Creation
function createAnElement(parentId, elementTag, elementId, style, html = null) {
  const createdElement = document.createElement(elementTag);
  createdElement.style.cssText = style;

  if (html) createdElement.innerHTML = html;
  createdElement.setAttribute("id", elementId[0]);
  if (elementId.length > 1) createdElement.setAttribute(`${elementId[1][0]}`, `${elementId[1][1]}`);
  if (parentId == "pass") {
    const dParentElement = document.getElementById("button").parentNode;
    dParentElement.appendChild(createdElement);
  } else document.getElementById(parentId).appendChild(createdElement);
}

// Remove
function removeElement(elementId) {
  const element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
