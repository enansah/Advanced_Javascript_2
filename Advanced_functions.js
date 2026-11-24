//Closures
// the closure allow fun=nctions to remember parameters even after it has executed


/* function scorePoint(playerName) {
    let score = 0
    return {
        displayScore: function() {
            console.log(`${playerName} has ${score} points`)
        },
        incrementScore: function() {
            score++
        },
        decrementScore: function() {
            score--
        }  

    }
}

const player1 = scorePoint('Vicky')
const player2 = scorePoint('Leo')
player2.incrementScore()
player2.incrementScore()
player2.decrementScore()
player1.incrementScore()
player2.decrementScore()
player1.incrementScore()

player1.displayScore()
player2.displayScore() */




//IIFEs - Immediately Invoked Function Expressions

/* (function() {
    const theme = localStorage.getItem('theme')
    if (theme) {
        console.log(theme)
    } else {
        console.log('light')
    }
})() */


/* (async (country) => {
    const weather = await fetch('/geo.json')
    const weatherObj = await weather.json()
    console.log(`The weather in the ${country} today is ${weatherObj[country]}`)    
})('UK') */





//Recursion : function call to execute till completion

/* function countdown(count) {
    console.log(count)
    if (count <= 0) {
        return count
    }
    countdown(count - 1)
}

countdown(5) */



/* function sumToN(n) {
    if (n <= 0) {
        return 0 
    } else {
        return n + sumToN(n -1)
    }
}

console.log(sumToN(10)) */





//Recursion and unwinding

/* let str = 'SCRIMBA'

function reverseStr(str) {
    if (str.length === 0) {
        return str
    } else {
        return reverseStr(str.slice(1)) + str.slice(0, 1)
    }
    }

console.log(reverseStr(str))
 */



//Currying: transform a function which takes multiple params into nested functions that takes single params  

/* function calculateVolume(length) {
    return function(width) {
        return function(height) {
            return length * width * height
        }
    }
} */
/* const calculateVolume = length => width => height => length * width * height
const volume = calculateVolume(2)(3)(4)
console.log(volume) */




//Currying is used for partial application for flexibility 
/* const calculateVolume = length => width => height => length * width * height

const calculateBaseAreaVolume = calculateVolume(2)(3)

const totalVolume1 = calculateBaseAreaVolume(4)
const totalVolume2 = calculateBaseAreaVolume(6)
const totalVolume3 = calculateBaseAreaVolume(10)


console.log(totalVolume1)
console.log(totalVolume2)
console.log(totalVolume3) */





//Throthling and Debouncing  

//Throthling makes sure a function is called at most once in a specific period of time 
//makes code fire at regular intervals 

//Debouncing ensures a function is called only after a certain period has passed since the last trigger 
//a call of a function trigger a timer and another call resets the timer unless there is no call till 
//the code is executed when the delay elapses


// Throthling 

//using the function keyword
/* function handleResize(e){
    console.log('resize happened on event: ' + e)
}

function throttle(func, delay) {
    let throttleTimeout = null
    return function() {
        if(!throttleTimeout) {
            func.apply(this, arguments)
            throttleTimeout = setTimeout(() => {
                throttleTimeout = null
            }, delay)
        } 
    }
}
const throttledHandleResize = throttle(handleResize, 1000)
window.addEventListener('resize', throttledHandleResize) */




//Throthling using arrow function 

/* function handleResize(e){
    console.log('resize happened on event: ' + e)
}

function throttle(func, delay) {
    let throttleTimeout = null
    return (...args)=> {
       if(!throttleTimeout) {
           func(...args)
           throttleTimeout = setTimeout(()=> {
               throttleTimeout = null
           }, delay)
       } 
    }

}
const throttledHandleResize = throttle(handleResize, 1000)
window.addEventListener('resize', throttledHandleResize) */




//Debouncing 

/* function debounce(func, delay) {
    let debounceTimer
    return (...args)=> {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(()=> {
            func(this, arguments)
        }, delay)
    }
}
function handleInput(e) {
    console.log('Input detected from element with id ' + e.target.id)
}

document.getElementById('name-input').addEventListener('input', debounce(handleInput, 500))

 */





//Generators: special functionds that can be paused and resumed allowing them to produce a 
//sequence of values over time 
// the return can be used to stop a generator 


/* const slidesArr = [
    "1. Intro Slide", 
    "2. The current situation", 
    "3. Setbacks", 
    "4. Plans", 
    "5. A Positive Future"
]

function* generator(arr) {
    for (const item of arr) {
        yield item
    }
}

const slideGenerator = generator(slidesArr)

document.getElementById('nextSlideBtn').addEventListener('click', () => {
    const result = slideGenerator.next()
    if (!result.done) {
        console.log(result.value)   
    } else {
        console.log('That is the end of the presentation!')
    }
})  */