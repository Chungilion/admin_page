const exams = document.querySelector(".exams");
const examsMenu = document.querySelector(".exam-menu");
const userBtn = document.querySelector(".user-btn");
const menuUser = document.querySelector(".menu-user");
const fullMenu = document.querySelector(".navbar-full-menu");
const barBtn = document.querySelector(".navbar-btn");

exams.onclick = () => {
  examsMenu.classList.toggle("active");
};

userBtn.onclick = () => {
  menuUser.classList.toggle("active");
};

barBtn.onclick = () => {
  fullMenu.classList.toggle("hidden");
};
