import React from 'react'
import Card from './components/Card';


function App() {

  
const users = [
  {
    "name": "Alice Johnson",
    "city": "New York",
    "age": 28,
    "profession": "Software Engineer",
    "profilePhoto": "https://example.com/profiles/alice.jpg"
  },
  {
    "name": "Bob Smith",
    "city": "San Francisco",
    "age": 34,
    "profession": "Graphic Designer",
    "profilePhoto": "https://example.com/profiles/bob.jpg"
  },
  {
    "name": "Catherine Lee",
    "city": "Chicago",
    "age": 25,
    "profession": "Data Scientist",
    "profilePhoto": "https://example.com/profiles/catherine.jpg"
  },
  {
    "name": "David Kim",
    "city": "Seattle",
    "age": 29,
    "profession": "Marketing Specialist",
    "profilePhoto": "https://example.com/profiles/david.jpg"
  },
  {
    "name": "Evelyn Martinez",
    "city": "Austin",
    "age": 31,
    "profession": "Product Manager",
    "profilePhoto": "https://example.com/profiles/evelyn.jpg"
  }
]

// users.forEach((elm) => {
//   console.log(elm)
// })

  return (
    <>
      <div className='flex gap-10 flex-wrap m-4'>
        {users.map((elm, index) => {
          const {name, age, city, profession, profilePhoto} = elm;
          return <Card key={index} name={name} age={age} city={city} profession={profession} profilePhoto={profilePhoto} />
        })}
      </div>
       
    </>
  )
}

export default App
