const set_input = document.getElementById("set_input");
const statusDiv = document.getElementById("status");

set_input.addEventListener("click", () => {
  statusDiv.innerText = "Analizing...";

  setTimeout(() => {
    document.write("Please wait");

    statusDiv.innerText = "";
  }, 2000);
});

// function cloneObject(obj) {
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }}
