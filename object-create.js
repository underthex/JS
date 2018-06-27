/**
 * Created by underthex on 6/13/18.
 */
"use strict";

const animal = {

    init: function(name, legs, wings){
        this.name = name;
        this.legs = legs;
        this.wings = wings;
        return this; //for chaining purpose.
    },

    bio: function(){
        return this.name + " has " +
        this.legs + " legs and " +
        this.wings + " wings."
    },

    say: function(sound){
        return this.name + " says " + sound
    }

};

const dog =
    Object.create(animal)
        .init('dog', 4, 0);

const eagle =
    Object.create(animal)
        .init('eagle', 2, 2);

console.log (dog.bio(), dog.say('Arff!!'));
console.log (eagle.bio(), eagle.say('Heeaawwk!!'));