/**
 * Created by underthex on 6/14/18.
 */

const sumAnimals = require('./jest-sum');

/*test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});*/

test('sum all dogs', () => {

    let animals = [
        { name: 'Fluffykins', species: 'rabbit', qty:4 },
        { name: 'Caro',       species: 'dog', qty:3 },
        { name: 'Hamilton',   species: 'dog', qty:8 },
        { name: 'Harold',     species: 'fish', qty:3 },
        { name: 'Ursula',     species: 'cat', qty:5 },
        { name: 'Arfy',     species: 'dog', qty:2 },
        { name: 'Jimmy',      species: 'dog', qty:5 }
    ];

    expect(sumAnimals(animals, 'dog')).toBeGreaterThan(0)
    expect(sumAnimals(animals, 'dog')).toBeLessThan(1000);
});

/*
* RUN IT using npm test
* or WATCH with npm run watch
* (see package.json for setup)
* */