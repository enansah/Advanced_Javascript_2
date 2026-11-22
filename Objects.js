//Static methods

/* const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

console.log(Object.keys(books)) */



//Object.hasOwn & .hasOwnProperty()
//used to check whether an object have a certain property 



// console.log(user2.hasOwnProperty('accessPremiumFeature'))
//console.log(Object.hasOwn(user2, 'accessPremiumFeature'))

/* const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
  accessPremiumFeature: true
}

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: false
}

const user3 = Object.create(null)
// user3.username = 'Tom'

// console.log(user3.hasOwnProperty('username'))
console.log(Object.hasOwn(user3, 'username'))

function canAccessPremiumFeature(userObj, prop) {
    // return userObj.hasOwnProperty(prop) && userObj[prop]
    return Object.hasOwn(userObj, prop) && userObj[prop] 
} */



//Assignment by Value/Reference : changes made to the original will cause of a change of their 
//values in memory

// shallow and deep copy


//Spread Operator(...): is use to expand out the individual elements in an array
//So it can be used to shallow copy an error into a diferent array 
// it can be used to expand objects as well


/* Shallow copy of array  
// const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
// const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
// const sweetMenu = [['Mixed Berry Ice Cream', 'Chocolate'], 'Chocolate Brownie', 'Orange Cheesecake']

// console.log(...lunchMenu)
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

// const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]
// eventMenu[8][0] = 'Tutti Frutti'
// console.log('sweetMenu', sweetMenu)
// console.log('eventMenu', eventMenu)


//Shallow copy of Object 
const salad1 = {
    name: 'green',
    ingredients: ['lettuce', 'tomato'] 
}
const salad2 = {...salad1}
salad2.name = 'Greek'
salad2.ingredients[0] = 'Cucumber'
console.log(salad1)
console.log(salad2) */



//challenge solution
/* const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

function findPriceExtremes(arr){
/*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/
/*     const highest = Math.max(...arr)
    const lowest = Math.min(...arr)
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
} */

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
/* findPriceExtremes([
    ...averageSharePriceByMonthQ1,
    ...averageSharePriceByMonthQ2,
    ...averageSharePriceByMonthQ3,
    ...averageSharePriceByMonthQ4
])  */



//Object.assign(): copies properties from the source to the target object 
//and returns the new property of the target 
//It is a for of shallow copy 

/* const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    }  
    
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)

console.log(studentDetailsCopy) */




//StructureClone: this is used to deep copy which creates a different obj from the source

/* const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    modulesCompleted: ['html', 'js', 'css']
} 

const deepClonedStudentDetails = structuredClone(studentDetails)
deepClonedStudentDetails.modulesCompleted[0] = 'TS'
console.log(studentDetails)
console.log(deepClonedStudentDetails) */

//structuredClone can clone objects with circular references.

//A circular reference is when an object points back to itself, directly or through another object:



//Binding "this"'

/* const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        // console.log(this)
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

// product.getProductInfo()

const productDetails = product.getProductInfo.bind(product)

productDetails() */



