let keyCodeDOM = document.querySelector("#keyCode");
let eventKeyDOM = document.querySelector("#key");
let eventWhichDOM = document.querySelector("#which");
let eventTypeDOM = document.querySelector("#type");
let eventCodeDOM = document.querySelector("#code");
let introMsgDOM = document.querySelector("#intromsg");
let mainDOM = document.querySelector("#main");

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
