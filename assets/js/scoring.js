document.addEventListener("DOMContentLoaded", function () {
  // Lấy điểm số từ localStorage
  const score = localStorage.getItem("correctAnswersCount");

  // Hiển thị điểm số
  const scoreContainer = document.querySelector(".score-container");
  scoreContainer.innerHTML = `Điểm số: ${score}/15`;
});

var now = new Date();
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
var formatted_datetime = now.toLocaleDateString("en-US", options);

document.getElementById(
  "date-time"
).innerHTML = `Thời gian : ${formatted_datetime}`;

// CIRCLE POINT
$(document).ready(function () {
  var $round = $(".round"),
    roundRadius = $round.find("circle").attr("r"),
    roundPercent = $round.data("percent"),
    roundCircum = 2 * roundRadius * Math.PI,
    roundDraw = (roundPercent * roundCircum) / 100;
  $round.css("stroke-dasharray", roundDraw + " 999");
});
