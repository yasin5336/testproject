// function addPost(e) {
//   e.preventDefault();

//   let TitleValue = document.getElementById("title").value;
//   let BodyValue = document.getElementById("body").value;

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title: TitleValue, body: BodyValue }),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// document.getElementById("addPost").addEventListener("submit", addPost);
