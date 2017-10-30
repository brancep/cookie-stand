'use strict'

// const locations = [ 'airport' , 'pioneer' , 'powells' , 'stjohns' , 'waterfront']
const hours = ['00:00' , '01:00' , '02:00' , '03:00' , '04:00' , '05:00' , '06:00' , '07:00' , '08:00' , '09:00']


var calcSales = function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const airport = {
    min: 23,
    max: 65,
    avg: 6.3,
    calcSales: calcSales
};


for (i = 0; i < hours.length; i++) {
    function cookies () {
        const avgCust = airport.calcSales(airport.min , airport.max);
        const cookiePerHour = avgCust * airport.avg;
    }

    console.log(cookies);
}


// const pioneer = {
//     min: 3,
//     max: 24,
//     avg: 1.2,
// };

// const powells = {
//     min: 11,
//     max: 38,
//     avg: 3.7,
// };

// const stjohns = {
//     min: 20,
//     max: 38,
//     avg: 2.3,
// };

// const waterfront = {
//     min: 2,
//     max: 16,
//     avg: 4.6,
// };

// for (i = 0; i < hours.length; i++) {
      
// }

