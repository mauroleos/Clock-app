function displayTime() {
  const currentTime = document.querySelector("time");

  const date = new Date();

  const hours = currentTime ? date.getHours() : normalHours(date);
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  const amPm = (date.getHours() < 12) ? "AM" : "PM";

  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${amPM}`;

  document.getElementById("weekday").innerHTML = getDay(date);
  document.getElementById("month").innerHTML = getMonth(date);
  document.getElementById("date").innerHTML = date.getDate() + ",";
  document.getElementById("year").innerHTML = date.getFullYear();
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
  let weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

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

let clock = setInterval(displayTime, 0);
