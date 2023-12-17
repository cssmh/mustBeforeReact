const nowDate = new Date();
console.log(nowDate);

const currentDate = new Date();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

console.log(`Current Time: ${currentHours}:${currentMinutes}:${currentSeconds}`);