//Short circuiting  (with ||and &&) : process where evaluation stops when result is determined
// nullish coalescing


//short circuit with OR operator (||)

/* const jobHunter = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }
    
// const jobHunterName = jobHunter.name || jobHunter.username

console.log(`Hey ${jobHunter.name || jobHunter.username}!`) */



//short circuit with AND operator (&&)

/* import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {

  let filteredData = startups

  const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

  if (industry) {
    filteredData = filteredData.filter( startup => 
      startup.industry.toLowerCase() === industry.toLowerCase()
    )
  }

  if (country) {
    filteredData = filteredData.filter( startup => 
      startup.country.toLowerCase() === country.toLowerCase()
    )
  }
  
  if (continent) {
    filteredData = filteredData.filter( startup => 
      startup.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter( startup => 
      startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
    )
  }
  
  if (has_mvp) {
    filteredData = filteredData.filter( startup => 
      startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    )
  }


  res.json(filteredData)

})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))

 */




//Nullish Coalescing Operator ??

//Falsy values in JS
//-False 
//0 or -0 
//An empty set
//null
//undefined
//Nan
//0n

//The nullish coalescing operator is used to log the zero value if 
//that is what is available but the OR operator returns false when the 
//value is 0 and thereby logs the substitute statement

/*function fetchUserBalance() {
    
    // This is where we would make call to bank's database
    
    const userBalance = 0 
    return userBalance
} 
const balance = fetchUserBalance()
const displayBalance = balance ?? "currently not available"

console.log(`Your balance is ${displayBalance}.`) */





//Optional chaining

/* const library = {
    sections: {
        fiction: {
            genre: {
                fantasy: [
                    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
                    { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
                ],
                scienceFiction: [
                    { title: "Dune", author: "Frank Herbert", year: 1965 },
                    { title: "Neuromancer", author: "William Gibson", year: 1984 }
                ]
            }
        }
    }
}

/*
Challenge:
    1. Apply optional chaining along the line to 
       log out The Hobit's year.
*/
