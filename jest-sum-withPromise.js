/**
 * Created by underthex on 6/14/18.
 */

/*function sum (a,b) {
    return a+b;
}
module.exports = sum;*/

function sumAnimals (animals, species) {
    return Promise.resolve(
        animals
            .filter(x => x.species === species)
            .reduce((sum, x) => {
                return sum + x.qty;

            }, 0)
    );
}
module.exports = sumAnimals;

