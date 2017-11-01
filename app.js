'use strict.';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const airport = new Store ('Portland Airport' , 23 , 65 , 6.3);
const pioneer = new Store ('Pioneer Square' , 3 , 24 , 1.2);
const powells = new Store ('Powell\'s Bookstore' , 11 , 38 , 3.7);
const stjohns = new Store ('St Johns' , 20 , 38 , 2.3);
const waterfront = new Store ('Waterfront' , 2 , 16 , 4.6);

function Store (name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesByHour = [];

    for (let i=0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandom(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        this.salesByHour.push(oneHour);
    }
}


//Random customer number generator.
function getRandom (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

////For render



/// for the hours header.

const mainList = document.getElementById('list');
const tRow = document.createElement('TR');
mainList.appendChild(tRow);

for (let i=0; i < hours.length; i++) {
    const tHead = document.createElement('TH');
    tHead.textContent = hours[i];
    tRow.appendChild(tHead);
};



Store.prototype.build = function () {
    const trCookie = document.createElement('TR'); // TR create
    mainList.appendChild(trCookie);

    for (let i= 0; i < this.salesByHour.length; i++) {
        const tdCookie = document.createElement('TD'); // TD create
        tdCookie.textContent = this.salesByHour[i].cookiesSold; // TD content
        trCookie.appendChild(tdCookie);
    }
}




airport.build();
pioneer.build();
powells.build();
stjohns.build();
waterfront.build();