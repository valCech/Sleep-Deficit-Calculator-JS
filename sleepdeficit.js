// The first problem to solve is determining how many 
// hours of sleep you got each night of the week.
const getSleepHours = day => {
  if (day === 'Monday') { 
      return 7;
  } else if (day === 'Tuesday') {
      return 6;
  } else if (day === 'Wednesday') {
      return 6;
  } else if (day === 'Thursday') {
      return 8;
  } else if (day === 'Friday') {
      return 7;
  } else if (day === 'Saturday') {
      return 6;
  } else if (day === 'Sunday') {
      return 8;
    }};

console.log(getSleepHours('Monday'));
console.log(getSleepHours('Thursday'));
console.log(getSleepHours('Sunday')); 

const getActualSleepHours = () => {getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + 
getSleepHours('Thrusday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 
return getActualSleepHours();
};

const getIdealSleepHours = () => {  
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());