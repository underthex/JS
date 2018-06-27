/**
 * Created by underthex on 6/10/18.
 */

//import fs from 'fs';
const fs = require('fs');

var output = fs.readFileSync('data-tab.txt', 'utf8')
    .trim()
    .split('\r')
    .map(line => line.split('\t'))
    .reduce((customers,line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            product: line[1],
            price: +line[2],
            qty: +line[3]
        });
        return customers;
    }, {});

console.log(JSON.stringify(output, null, 2));