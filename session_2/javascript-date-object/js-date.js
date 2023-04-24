// https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
// about UTC https://www.utctime.net/
// https://www.geeksforgeeks.org/javascript-date-objects/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date


const now = new Date();
console.log(now.getTime())
console.log(now)

const date = new Date('2023-04-20T16:10:00')
console.log(date);
console.log(date.toLocaleDateString('en-EN',{
    weekday:'long',
    month:'long',
    year:'numeric',
    day:"numeric",
    hour:'2-digit'
}));
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const startDate = '2023-04-18T17:00:00';

function isTheEndOfCampaign(startDate,days) {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);
    return endDate.getTime() <= new Date().getTime();
}

console.log(isTheEndOfCampaign(startDate,2))