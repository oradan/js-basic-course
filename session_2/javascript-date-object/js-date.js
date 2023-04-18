// https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
// about UTC https://www.utctime.net/
// https://www.geeksforgeeks.org/javascript-date-objects/


// calculate if is the end of campaign

const dateString = '2023-03-04T15:08:00';
const satrtDate = new Date('2023-03-6');
const now = new Date();

function isTheEndOfCampaign(startDateStr, days) {
    const endDate = new Date(startDateStr);
    const endDay = endDate.getDate() + days;
    endDate.setDate(endDay);
    return endDate.getTime() <= new Date().getTime()
}

// finding the number of days between tow dates

function daysDiff(firstdate, secondDate) {
    const milisecondsDiff = Math.abs(firstdate.getTime() - secondDate.getTime());
    const dayDiff = Math.round(milisecondsDiff / (1000 * 60 * 60 * 24));
    return dayDiff;
}


function dayDiffVersion2(firstDate, secondDate) {
    const firstD = Date.parse(firstDate);
    const secondD = secondDate ? Date.parse(secondDate) : Date.now();
    const miliseconds = Math.abs(firstD - secondD) / 1000 / 60 / 60 / 24;
    const milisecondss = Math.abs(firstD - secondD) / (1000 * 60 * 60 *24);
    const dayDiff = Math.round(miliseconds);
    return dayDiff
  }
  


function isInPast(date, now) {
    return date.setHours(0, 0, 0, 0) <= now.setHours(0, 0, 0, 0);
}

function campaignStatusMsg(startDateStr, days) {
    let message = "";
    return message = isTheEndOfCampaign(startDateStr, days) ? "We are sorry but the campaign is over " : `There are ${daysDiff(new Date(startDateStr), new Date())} days left from the campaign`
}

const msg = campaignStatusMsg(dateString, 1)
console.log(msg)
const isPast = isInPast(satrtDate, now)


const dateFromAPI = "2016-01-02T12:30:00Z";

const localDate = new Date();
const localDateString = localDate.toLocaleDateString('ro-RO', {  
    weekday:   'long',
    month: 'long',
    year:  'numeric',
    day: 'numeric'
});


const localTimeString = localDate.toLocaleTimeString('ro-RO', {
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

console.log(localDateString)
console.log(localTimeString)