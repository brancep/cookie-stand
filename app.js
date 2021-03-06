'use strict.';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//// Main constructor function for calculating the number of cookies and random number of customers.
function Store (name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesByHour = [];
    this.mainSales();
}


Store.prototype.mainSales = function () {
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


const airport = new Store ('Portland Airport' , 23 , 65 , 6.3);
const pioneer = new Store ('Pioneer Square' , 3 , 24 , 1.2);
const powells = new Store ('Powell\'s Bookstore' , 11 , 38 , 3.7);
const stjohns = new Store ('St Johns' , 20 , 38 , 2.3);
const waterfront = new Store ('Waterfront' , 2 , 16 , 4.6);



//// Creation of the main table and row
const mainList = document.getElementById('list');
const tRow = document.createElement('TR');
mainList.appendChild(tRow);

//// Creating the space at the beginning to align rows with hours
const space = document.createElement('TH');
space.textContent = "";
tRow.appendChild(space);

//// This will display the row of hours at the top.
for (let i=0; i < hours.length; i++) {
    const tHead = document.createElement('TH');
    tHead.textContent = hours[i];
    tRow.appendChild(tHead);
};

/// Total header
const totalHeader = document.createElement('TH');
tRow.appendChild(totalHeader);
totalHeader.textContent = "Total";


//// Main proto for building out data in the columns.
Store.prototype.build = function () {

    //// Location Names
    const trCookie = document.createElement('TR'); // TR create
    mainList.appendChild(trCookie);
    const locNames = document.createElement('TH');
    locNames.textContent = this.name;
    trCookie.appendChild(locNames);

    //// Loop for the data and rendering the data on the page.
    for (let i= 0; i < this.salesByHour.length; i++) {
        const tdCookie = document.createElement('TD'); // TD create
        tdCookie.textContent = this.salesByHour[i].cookiesSold; // TD content
        trCookie.appendChild(tdCookie);
    }

    let totalData = 0;
    for (let i= 0; i < hours.length; i++) {
        totalData = totalData + this.salesByHour[i].cookiesSold;
    }

    const tSalesData = document.createElement('TH');
    tSalesData.textContent = totalData;
    console.log(tSalesData);
    trCookie.appendChild(tSalesData);
}

//// HELPER FUNCTIONS ////
//Random customer number generator.
function getRandom (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//// Calling the functions.

airport.build();
pioneer.build();
powells.build();
stjohns.build();
waterfront.build();


//// Taking the information from the for and populating it to the page.

const formInfo = document.getElementById('form');

formInfo.addEventListener('submit' , function () {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const avg = document.getElementById('avg').value;

    const newStore = new Store (name, min, max, avg);
    newStore.build();
});