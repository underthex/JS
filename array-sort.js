/**
 * Created by underthex on 6/14/18.
 */
const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Amy',      species: 'dog' }
];

//get all dogs and sort by names
let isDogs = animals.filter(animal=>animal.species==='dog')
    .sort((a,b)=>a.name>b.name)
    ;


console.log(JSON.stringify(isDogs, null,2));