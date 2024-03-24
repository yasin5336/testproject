const input = document.querySelector(".input");
const filterItem = (e) => {
  if (e.target.value === "") {
    getusers();
    return;
  } else {
    fetch("test.json")
      .then((res) => res.json())
      .then((json) => {
        let output = "";
        json.filter((item) => {
          if (
            item.id.toString() === e.target.value ||
            item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.lastname
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item.age.toLowerCase() === e.target.value.toLowerCase() ||
            item.city.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            output += `
            <ul>
            <li class="id">${item.id}</li>
             <li>${item.name}</li>
            <li>${item.lastname}</li>
            <li>${item.age}</li>
            <li>${item.city}</li>
            </ul>
            `;
          }
        });
        document.querySelector(".items").innerHTML = output;
      });
  }
};

function getusers() {
  fetch("test.json")
    .then((res) => res.json())
    .then((json) => {
      let output = "";
      json.forEach(function (user) {
        output += `
        <ul>
        <li class="id">${user.id}</li>
         <li>${user.name}</li>
        <li>${user.lastname}</li>
        <li>${user.age}</li>
        <li>${user.city}</li>
        </ul>
        `;
      });
      document.querySelector(".items").innerHTML = output;
    });
}
getusers();
