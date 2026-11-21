//Promises
//States:
//Pending - Resolved/Fulfilled - Rejected

//how to handle a rejection method
 
/* 
async function dataFetch(){
try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
 if (!response.ok){
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
} finally {
    console.log('The operation completed.')
}  
}*/

 

//API call methods
//GET: Default for fetch
//POST
//PUT 
//DELETE 


//API request: Body

/* try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'Holiday Nightmares',
                body: 'When I was kidnapped in Scotland…',
                userId: 100
            }),
             headers: {
                'Content-Type': 'application/json'
            }
        })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
} */






//Promise Constructor 
/* const promise = new Promise((resolve, reject)=> {
    const success = Math.random() > 0.5
    if (success) { 
        resolve('Operation successful')
    } else {
        reject('Operation failed')
    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err) {
    console.log(err)
} */



//image constructor 
/* const image = new Image()
image.src = "http://..."

console.log(image) */

// image.addEventListener('load', ()=>console.log('Image has loaded'))
//image.addEventListener('error', ()=>console.log('Image has NOT loaded'))




//callback hell: situation whereby multiple async operations are chaoned together using nested callbacks, 
//which makes the code difficult to read and maintain.
/* function uploadFile(callback){
    console.log('Step 1: Uploading file...')
    setTimeout(()=> {
        callback() // call next function
    }, 1000)
}
// process a file
function processFile(callback){
    console.log('Step 2: Processing file...')
    setTimeout(()=> {
        callback() // call next function
    }, 1000)
}
// notify a user
function notifyUser(callback){
    console.log('Step 3: Notifying user...')
    setTimeout(()=> {
        callback() // call next function
    }, 1000)
}

uploadFile(()=> { 
    processFile( ()=> { 
        notifyUser( ()=> { 
            console.log('All steps completed!') 
        }) 
    }) 
}) */




//    Using Promises to escape Callback Hell

/* function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

try {
    await uploadFile()
    await processFile() 
    await notifyUser()
    console.log('All steps completed!')
} catch(err) {
    console.log(err)
} */ 