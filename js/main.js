'use strict';

class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    apartmentDwellers = [];

    addToApartment(...person) {
        this.apartmentDwellers.push(...person);
        return this;
    }
}

class Building {
    #maxCount = 2;
    flatsInBuilding = [];

    addToBuilding(...flat) {
        if(this.flatsInBuilding.length < this.#maxCount) {
            this.flatsInBuilding.push(...flat);
            return this;
        } else {
            console.log('Перевищено максимальну кількість квартир!');
        }
    }
}


const person1 = new Human('Bayraktar', 'man');
const person2 = new Human('Banderogus', 'man');
const person3 = new Human('Stefania', 'woman');

const flat1 = new Apartment().addToApartment(person1);
const flat2 = new Apartment().addToApartment(person2);
const flat3 = new Apartment().addToApartment(person3);

const building = new Building().addToBuilding(flat1, flat2);

console.log(person1);
console.log(flat1);
console.log(building);
building.addToBuilding(flat3);