//Objects, Collections, Functions
//Factory function: a function thst returns an object
//Disadvantage: less performant and no inheritance

/* function gamer(name, score) {
    return {
        name,
        score,
        incrementScore() {
            this.score++
        }
    }
}

const alice = gamer('Alice', 10)
console.log(alice)
alice.incrementScore()
console.log(alice) */


//contructor funtions to classes

/* class Character {
    constructor(name) {
        this.name = name
        this.collectedItemsArr = []
    }
    
    addItem(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)    
    }
}

const wizard = new Character('Merlin')
const witch = new Character('Hermione')
wizard.addItem('a wand')
wizard.addItem('a map')
wizard.addItem('a rope')
witch.addItem('a map')
witch.addItem('a rope') */



//call() and apply() methods is used to control this 
//the call() method is used to call an object or a funtion as the 'this' parameter to a function. 
//the apply() method does the same thing just that it accepts an array as the only variable within the function call

/* function displayPolitician(currentSituation) {
    console.log(this)
    // console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`)
}

const politician1 = {
  name: 'Carly Fowler',
  age: 40
}

displayPolitician.call(politician1, 'In jail for corruption') */



//Inheritance (Prototype chain): Reference from a parent object
// the parent object is called the base object or the object object 
//Polymorphism is implementing an base object to overide its initial functionality

//Inheritance with a constructor functions 
/* function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function () {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
console.log(concert.getDetails()) */



//the act of Polymorphism

/* function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
}

Event.prototype.getDetails = function() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
}

Event.prototype.cancelEvent = function() {
    return 'Event Cancelled'
}

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

Concert.prototype.getDetails = function() {
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
const concert2 = new Concert("Happy days", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Lush Vibes", "Wembley", "2024-03-08", "Si Twig")
console.log(concert.getDetails())
console.log(concert2.getDetails())
console.log(concert3.getDetails()) */
 

//Inheritance with classes 

/* class Event {
    constructor(name, location, date) {
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

class Concert extends Event {
    constructor(name, location, date, headliner) {
        super(name, location, date)
        this.headliner = headliner
    }
    
    getDetails() {
        const eventBasics = super.getDetails()
        return `${eventBasics} Headliner: ${this.headliner}`
    }
}

const concert = new Concert("Summer Beats", "City Stadium", "2023-07-15", "The Electrons")
console.log(concert.getDetails()) */




//Static methods and Properties 
 
/* class Employee {
    static employeeCount = 0
    constructor(name) {
        this.name = name
        Employee.employeeCount++
    }
    
    static getEmployeeCount() {
        return Employee.employeeCount
    }
}

const employee1 = new Employee("Alice")
const employee2 = new Employee("Bob")
const employee3 = new Employee("Smith")
console.log(Employee.getEmployeeCount()) */





//Private Field: is used to protect the properties of our object 
//they use the hash tag instance 
/* class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }
} 

const safari = new Holiday('Kenya', 1000)
// safari.destination = 'Tanzania'
console.log(safari) */




//getters and setters: is used to return a private field 

/* class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }

    get destination() {
        return this.#destination
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0){
            throw new Error('Destination not valid')
        }
        this.#destination = newDestination
    }
}

const safari = new Holiday('Kenya', 1000)
safari.destination = []
console.log(safari.destination) */



