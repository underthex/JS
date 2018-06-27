/**
 * Created by underthex on 6/13/18.
 */
"use strict";

function Animal (name, legs, wings) {
    this.name = name;
    this.legs = legs;
    this.wings = wings;
}

Animal.prototype = {
    bio: function(){
        return this.name + " has " +
            this.legs + " legs and " +
            this.wings + " wings."
    },
    say: function(sound){
        return this.name + " says " + sound
    }
}

let cow = new Animal('cow', 4, 'no');
let duck = new Animal('duck', 2, 2);

console.log(cow.bio(), cow.say('moo!'));
console.log(duck.bio(), duck.say('quack!'));

console.log(cow);

//to prove the prototypical inheritance here:
console.log(Animal.prototype.isPrototypeOf(cow));