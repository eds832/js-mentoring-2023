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
  let br = "Unknown";
  let num = "unknown";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1].test(browserUserAgent)) {
      br = arr[i][0];
      num = browserUserAgent.split(arr[i][1])[1].split(" ")[0].replace("/", "");
      break;
    }
  }
  document.querySelector(
    "#browser-output"
  ).innerHTML = `Browser user agent: ${browserUserAgent}<br>Browser name: ${br}<br> 
      Browser version: ${num}`;
}

// 4. Display the screen width and height of the user's device using the window.screen object.

function displayScreenInfo() {
  let width = window.screen.width;
  let height = window.screen.height;

  let currentWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let currentHeight =
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
  let cookieValue = document
    .querySelector("#cookie-value")
    .textContent.replace(/\s+/g, "-")
    .replace(/[;=]/g, "");

  document.cookie = `${MY_COOKIE_NAME}=${cookieValue}`;

  showCookie(MY_COOKIE_NAME);
}

function showCookie(name) {
  let cookieArray = document.cookie.split(";");

  let cookie = null;
  for (let i = 0; i < cookieArray.length; i++) {
    let cookiePair = cookieArray[i].split("=");

    if (name == cookiePair[0].trim()) {
      cookie = cookiePair[1];
      break;
    }
  }
  document.querySelector("#cookie-output").innerHTML = `Your cookie: ${cookie}`;
}

// 7. Select and highlight all paragraphs in a document when a button is clicked.

function highlightParagraphs() {
  let nodes = document.querySelectorAll("p");
  nodes.forEach((node) => (node.style.color = "lightgreen"));
}

// 8. Replace the text content of a paragraph with a new value when a button is clicked.

function replaceContent() {
  let newContent = document.querySelector("#your-content").textContent;
  document.querySelector("#content-output").innerHTML = newContent;
}

// 9. Change the background color and add a custom data attribute to a specific
// element when a button is clicked.

const DATA_CUSTOM = "data-custom";

function changeBGAddAppAttirbute() {
  let elem = document.querySelector("#specific-element");
  elem.style.backgroundColor = "#989";
  elem.setAttribute(DATA_CUSTOM, "my-value");
  showCustomAttribute();
}

function showCustomAttribute() {
  let elem = document.querySelector("#specific-element");
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
