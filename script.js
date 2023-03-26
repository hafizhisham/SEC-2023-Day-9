let keyCodeDOM = document.getElementById("keyCode");
let eventKeyDOM = document.getElementById("key");
let eventWhichDOM = document.getElementById("which");
let eventTypeDOM = document.getElementById("type");
let eventCodeDOM = document.getElementById("code");
let introMsgDOM = document.getElementById("intromsg");
let mainDOM = document.getElementById("main");

document.addEventListener("keydown", captureKey);

function captureKey(event) {
  keyCodeDOM.innerText = event.keyCode;
  eventKeyDOM.innerText = event.key.toUpperCase();
  eventWhichDOM.innerText = event.which;
  eventTypeDOM.innerText = event.type;
  eventCodeDOM.innerText = event.code;
  introMsgDOM.style.display = "none";
  mainDOM.style.display = "block";
  if (event.keyCode === 32) {
    eventKeyDOM.innerText = "[Space Bar]";
  }
}
