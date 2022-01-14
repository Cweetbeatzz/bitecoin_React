/* eslint-disable no-unused-vars */
import "./Wallet.jsx";

const links = document.querySelectorAll(".nav-link");
const active = document.getElementById("gasfees");
const token = document.getElementById("token");
const dai = document.getElementById("dai");
const ethereum = document.getElementById("ethereum");
const content = document.querySelectorAll(".content");
const walletsection = document.querySelector(".walletsection");

// walletsection.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     links.forEach(function (btn) {
//       btn.classList.remove("active");
//       e.target.classList.add("active");
//     });

//     content.forEach(function (contents) {
//       contents.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.target.classList.add("active");
//   }
// });
