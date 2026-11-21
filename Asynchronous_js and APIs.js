/* API - Application Programming Interface

Is a mediator between programs

DOM API
Array method
3rd party api
localstorage  */

//JSON stands for Javascript Object Notation

//URL MAKEUP:
//Base URL eg. https:scrimba.com/api 
//Endpoint eg. /users etc

// there are two ways to write the fetch requeest in javascript 

//Fetching with .then()
/* fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => console.log(data.activity)) */


// Fetching using async/await 

/*async function getDogImage() {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    const data = await response.json()
    const imageElement = document.createElement('img')
    imageElement.src = data.message
    imageElement.alt = 'random dog picture'
    document.getElementById('img-container').appendChild(imageElement)
    console.log(data)
}

getDogImage() */


/* async function getSuggestion() {
    const response =  await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await response.json()
    console.log(data)
}

getSuggestion() */






