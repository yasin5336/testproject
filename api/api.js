const myBtn = document.getElementById("gettext");

function getText() {
  fetch("api.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    });
}
function getText() {
  fetch("api.txt")
    .then((res) => res.text())
    .then((data) => console.log(data));
}

myBtn.addEventListener("click", getText);
