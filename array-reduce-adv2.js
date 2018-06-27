/**
 * Created by underthex on 6/10/18.
 */

//import fs from 'fs';
const fs = require('fs');

var output = fs.readFileSync('data-tab.txt', 'utf8')
    .trim()
    .split('\r')
    .map(line => line.split('\t'))
    .reduce((customers, items) => {
        customers[items[0]] = customers[items[0]] || [];
        customers[items[0]].push({
            product: items[1],
            price: items[2],
            qty: items[3]
        });
        return customers;
    }, {});


console.log(JSON.stringify(output, null, 2));
