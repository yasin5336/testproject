// const numbers = [55, 46, 21, 87, 5];
// numbers.forEach(function (items, index, arr) {
//   console.log(`item = ${items} index = ${index} arr = ${arr}`);
//   console.log(arr);
// });

// const mybtn = document.querySelector(".getUsers");
// function getusers() {
//   fetch("each.json")
//     .then((res) => res.json())
//     .then((json) => {
//       let output = "";
//       json.forEach(function (user) {
//         output += `
//         <ul>
//         <li>${user.id}</li>
//          <li>${user.Name}</li>
//         <li>${user.lastname}</li>
//         <li>${user.age}</li>
//         </ul>
//         `;
//       });
//       document.querySelector(".output").innerHTML = output;
//     });
// }

// mybtn.addEventListener("click", getusers);

// const mybtn = document.querySelector(".getUsers");
// function doin() {
//   let greeting = (name) => console.log(`hello ${name}`);
//   const userinfo = (firstname, lastname, callback) => {
//     const fullname = `${firstname} ${lastname}`;
//     callback(fullname);
//   };
//   userinfo(`yasin`, `karami`, greeting);
// }
// mybtn.addEventListener("click", doin);

// const hasmeeting = false;
// const meeting = new Promise((resolve, reject) => {
//   if (!hasmeeting) {
//     const meetingdetails = {
//       name: "maskhare bazzi",
//       location: "tehran",
//       time: "farda",
//     };
//     resolve(meetingdetails);
//   } else {
//     reject(new Error("meeting canceled....."));
//   }
// });

// const addToCalendar = (meetingdetails) => {
//   const calendar = `${meetingdetails.name} dar ${meetingdetails.location} saat ${meetingdetails.time}`;
//   return Promise.resolve(calendar);
// };
// async function mymeeting() {
//   const meetingdetails = await meeting;
//   const message = await addToCalendar(meetingdetails);

//   console.log(message);
// }
// mymeeting();

// meeting
//   .then(addToCalendar)
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// const Promise1 = Promise.resolve("promise 1 complete");
// const Promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("promise 2 complete");
//   }, 5000);
// });
// Promise1.then((res) => console.log(res));
// Promise2.then((res) => console.log(res));
// Promise.all([Promise1, Promise2]).then((res) => console.log(res));

// function getmessage() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("hello callback");
//     }, 2000);
//   });
// }
// function mufunction(message) {
//   console.log(message);
// }
// getmessage().then(mufunction);

// async function myfunction() {
//   return "salam";
// }
// console.log(myfunction());

// const firstfunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("first function executed");
//       resolve("resolved after 3 sec");
//     }, 3000);
//   });
// };

// const secondfunction = async () => {
//   console.log("calling first function");
//   const firstfunctionresult = await firstfunction();
//   console.log(firstfunctionresult);
// };
// secondfunction();
// console.log("The End");

console.log("alooooo");

const mmd = document.querySelector(".ali");

localStorage.setItem("firstname", "yasin");

localStorage.setItem("lastname", "karami");

localStorage.removeItem("lastname");

const firstname = localStorage.getItem("firstname");

firstname ? (mmd.innerHTML = `salam ${firstname}`) : (mmd.innerHTML = `na`);
