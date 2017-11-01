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

    const salesByHour = [];
    for (let i=0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandom(this.min, this.max);
        const numCookies = Math.round(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
};


//Random customer number generator.
function getRandom (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const locations = [airport , pioneer , powells , stjohns , waterfront];


////For render

Store.prototype.build = function () {
    const store = document.getElementById('list');
    const title = document.createElement('H3'); //for a heading of location name
    title.textContent = this.name;
    store.appendChild(title);

    //// to begin table construction.
    const tableHead = document.getElementById('table-head');

    // const ul = document.createElement('UL');
    // store.appendChild(ul);
    // ul.appendChild(title);

    for (let i= 0; i < hours.length; i++) {   
        const tableRow = document.createElement('TR');
        tableHead.appendChild(tableRow);

        const tableDataHour = document.createElement('TD');
        tableHead.appendChild(tableDataHour);
        tableDataHour.textContent = this.salesByHour[i].hour;

        const tableDataCookie = document.createElement('TD');
        tableHead.appendChild(tableDataCookie);
        tableDataCookie.textContent = this.salesByHour[i].cookiesSold;
    }
}

airport.build();
pioneer.build();
powells.build();
stjohns.build();
waterfront.build();