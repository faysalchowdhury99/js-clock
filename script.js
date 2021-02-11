// Selectors
let hours = document.getElementById("hours");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let progress = document.getElementById("progress");
let timeFormat = document.getElementById("time-format");

// Set Current Time Function
let setCurrentTine = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hr >= 12) {
    hr = hr - 12;
    timeFormat.innerHTML = "PM";
  }
  if (hr == 0) {
    hr = 12;
  }

  hours.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;

  progress.style.width = (sec / 60) * 100 + "%";
};

setInterval(setCurrentTine, 1000);
