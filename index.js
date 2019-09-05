
const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const amPm = hours >= 12 ? 'PM' : 'AM'; 
  if (hours > 12) {
    hours -= 12;
  }
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const timeComponents = [hours, minutes, seconds, amPm]
    .map(cmp => `<span>${String(cmp).padStart(2, '0')}</span>`);
  return `${timeComponents.join(':')}`;
}

const init = () => {
  setInterval(() => {
    document.getElementById('time')
      .innerHTML = getTime();
  },1000);
};

init();

// JavaScript Date Formats
const d0 = new Date("2019-09-6");
document.getElementById("demo0").innerHTML = d0;


// JavaScript getMonth()
const d = new Date();
document.getElementById("demo").innerHTML = d.getMonth() + 1;

// getDate()
const d1 = new Date();
document.getElementById("demo1").innerHTML = d1.getDate();

// getDay()
const d2 = new Date();
document.getElementById("demo2").innerHTML = d2.getDay();

//setFullYear()
var d3 = new Date();
d3.setFullYear(2020);
document.getElementById("demo3").innerHTML = d3;