/**
 * Created by underthex on 6/12/18.
 */
let data = [
    "animals.dogs.poodle",
    "animals.cats.tabby",
    "animals.cats.siamese",
    "animals.dogs.labrador",
    "animals.dogs.hound",
    "plants.trees",
    "animals.birds.parrot.grey"
    ];



let creatures = data
    .map(x => x.split('.'));


let makeTree = (creatures, parent, index) => {
    parent = parent || 'root';
    index = index || 0;
    let node = {};
    creatures
        .filter(item => item[0] === parent)
        .forEach(item => {
            node[parent] = parent;
        });

    return node;
};

console.log(creatures
    .filter(x => {
        return x[1] === 'dogs';
    }));

/*let makeTree(items){

}*/



/*
* RESULT

root
    animals
        dogs
            poodle
            labrador
            hound
        cats
            tabby
            siamese
        birds
            parrot
                grey
    plants
        trees

* */

//console.log(makeTree(creatures,'root',0));