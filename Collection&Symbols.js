//Symbol, Map object and set object
//Symbol is a primitive datatype 
//Symbols are not 100% private  
/* const userName = Symbol('user name')

const user = {
    name: 'Benny',
}

user[userName] = 'Benny67'

console.log(user[userName]) */






//the map object is not the same as the array map object
/* const athlete1 = { name: "Alice", age: "50" }
const athlete2 = { name: "Dave", age: "51" }
const athlete3 = { name: "Nicky", age: "49" }

const finishers = new Map()

finishers.set(athlete1, 10000)
finishers.set(athlete2, 10200)
finishers.set(athlete3, 9800)

// finishers.forEach((value, key)=> console.log(key.name, value))
// console.log(finishers.size)
finishers.delete(athlete3)
console.log(finishers.has(athlete2)) */




//Set object stores unique values as individual items 
//use to remove duplicates 

/* const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet = new Set(wishListArr)

wishListSet.forEach((listItem) => console.log(listItem)) */



//using set object to iterate over array to return an array

/* const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet = Array.from(new Set(wishListArr))

wishListSet.map((listItem) => console.log(listItem)) */



//Deleting, clear, adding and iterating over items in a variable using the set object

/* const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet = new Set(wishListArr)

wishListSet.add('diary')
// wishListSet.delete('shoes')
console.log(wishListSet.has('shoes'))
wishListSet.clear()

wishListSet.forEach((listItem) => console.log(listItem)) */