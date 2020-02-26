function displayTime() {
  const currentTime = document.querySelector("time");

  const date = new Date();

  const hours = currentTime ? date.getHours() : normalHours(date);
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  const amPm = (date.getHours() < 12) ? "AM" : "PM";

  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${amPM}`;

  document.getElementById("weekday").innerHTML = `${getDay(date)} ${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

function normalHours(date){
  const hours = date.getHours();
  if (hours > 12) {
    return hours - 12;
  }
  if (hours === 0){
    hours = 12;
  }
  return hours;
}

function getDay(date){
  let months = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekDay[date.getDay()];
}

function getMonth(date){
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return months[date.getMonth()];
}

setInterval(displayTime, 0);
