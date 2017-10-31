'use strict'
const airport = {
    name: 'Portland Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales
};

const pioneer = {
    name: 'Pioneer Square',
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales
};

const powells = {
    name: 'Powells',
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales
};

const stjohns = {
    name: 'St Johns',
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales
};

const waterfront = {
    name: 'Waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales
};



const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function getRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hourlySales(){
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

    // table head
    const thead = document.createElement('THEAD');
    table.appendChild(thead);
    thead.textContent = this.name;
    
    //table row
    const trow = document.createElement('TR');
    table.appendChild(trow);
    trow.textContent = this.hours;

    const hourData = document.createElement('TD');
    trow.appendChild(hourData);
    hourData.textContent = "Hours: " + this.salesByHour.hour;
    
    const cookieData = document.createElement('TD');
    trow.appendChild(cookieData);
    cookieData.textContent = "Cookies: " + this.salesByHour.cookiesSold;
    

    // // Original render code
    // const mainList = document.getElementById('list');
    // const title = document.createElement('H3');
    // title.textContent = this.name;
    // const ul = document.createElement('UL');
    // mainList.appendChild(ul);
    // ul.appendChild(title);

    // for (let i= 0; i < hours.length; i++) {
    //     let li = document.createElement('LI');
    //     li.textContent = "Hour: " + this.salesByHour[i].hour + " Cookies: " + this.salesByHour[i].cookiesSold;
    //     ul.appendChild(li);
    // }
}

const mainList = document.getElementById('list');
const table = document.createElement('TABLE');
mainList.appendChild(table);

// //table head
// const thead = document.createElement('THEAD');
// table.appendChild(thead);
// thead.textContent = "Hours: ";


airport.hourlySales();
pioneer.hourlySales();
powells.hourlySales();
stjohns.hourlySales();
waterfront.hourlySales();