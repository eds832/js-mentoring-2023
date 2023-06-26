// 1. Use the window.location object to redirect the user
// to a different webpage when a button is clicked.

function redirectToGoogle() {
  window.location.href = "https://www.google.com";
}

// 2. Use the window.history object to go back to the previous page when a button is clicked.

function goBackToPreviousPage() {
  window.history.back();
}

// 3. Access and display the user's browser name and version using the window.navigator object.

function displayBrowserInfo() {
  const browserUserAgent = window.navigator.userAgent;
  const arr = [
    ["Microsoft Edge", /edg/i],
    ["Microsoft Internet Explorer", /trident/i],
    ["Mozilla Firefox", /firefox|fxios/i],
    ["Opera", /opr\//i],
    ["UC Browser", /ucbrowser/i],
    ["Samsung Browser", /samsungbrowser/i],
    ["Google Chrome", /chrome|chromium|crios/i],
    ["Apple Safari", /safari/i],
    ["Unknown", /.+/i],
  ];
  const elem = arr.find((el) => el[1].test(browserUserAgent));
  const br = elem ? elem[0] : "Unknown";
  const num = elem
    ? browserUserAgent.split(elem[1])[1].split(" ")[0].replace("/", "")
    : "unknown";
  document.querySelector(
    "#browser-output"
  ).innerHTML = `Browser user agent: ${browserUserAgent}<br>Browser name: ${br}<br> 
      Browser version: ${num}`;
}

// 4. Display the screen width and height of the user's device using the window.screen object.

function displayScreenInfo() {
  const width = window.screen.width;
  const height = window.screen.height;

  const currentWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const currentHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  document.querySelector(
    "#size-output"
  ).innerHTML = `Screen width: ${width}<br>Screen hight: ${height}<br>
    Current width: ${currentWidth}<br>Current hight: ${currentHeight}`;
}

document.addEventListener("DOMContentLoaded", () => {
  displayScreenInfo();
  displayBrowserInfo();
});

window.addEventListener("resize", () => {
  displayScreenInfo();
});

// 5. Change the background color of the document body to yellow when a button is clicked.

function changeBackgroundColor() {
  document.body.style.backgroundColor = "yellow";
}

// 6. Set a cookie with a name and value when a button is clicked.

const MY_COOKIE_NAME = "myCookie";

function setCookie() {
  const cookieValue = document
    .querySelector("#cookie-value")
    .textContent.replace(/\s+/g, "-")
    .replace(/[;=]/g, "");

  document.cookie = `${MY_COOKIE_NAME}=${cookieValue}`;

  showCookie(MY_COOKIE_NAME);
}

function showCookie(name) {
  const cookieArray = document.cookie.split(";");

  const cookiePair = cookieArray
    .map((el) => el.split("="))
    .find((el) => name === el[0].trim());

  const cookie = cookiePair ? cookiePair[1] : null;

  document.querySelector("#cookie-output").innerHTML = `Your cookie: ${cookie}`;
}

// 7. Select and highlight all paragraphs in a document when a button is clicked.

function highlightParagraphs() {
  const nodes = document.querySelectorAll("p");
  nodes.forEach((node) => (node.style.color = "lightgreen"));
}

// 8. Replace the text content of a paragraph with a new value when a button is clicked.

function replaceContent() {
  const newContent = document.querySelector("#your-content").textContent;
  document.querySelector("#content-output").innerHTML = newContent;
}

// 9. Change the background color and add a custom data attribute to a specific
// element when a button is clicked.

const DATA_CUSTOM = "data-custom";

function changeBGAddAppAttirbute() {
  const elem = document.querySelector("#specific-element");
  elem.style.backgroundColor = "#989";
  elem.setAttribute(DATA_CUSTOM, "my-value");
  showCustomAttribute();
}

function showCustomAttribute() {
  const elem = document.querySelector("#specific-element");
  document.querySelector("#custom-value").innerHTML =
    elem.getAttribute(DATA_CUSTOM);
}

// 10. Attach an event listener to a button that triggers an alert when clicked, and
// demonstrate event propagation by attaching another event listener to a parent
// element that triggers a different alert.

document.querySelector("#child").addEventListener("click", (ev) => {
  alert("Button clicked");
  //ev.stopPropagation();
});

// Attach an event listener to the parent element
document.querySelector("#parent").addEventListener("click", () => {
  alert("Parent clicked");
});
