import React from 'react'

const Card = ({name, age, city, profession, profilePhoto}) => {
  return (
    <>
    <div className="border-white border-2 p-4  text-center">
      <img className='w-full p-[50px]' src={profilePhoto} alt={name} />
      <h1 className='tex-3xl'>Username: {name}</h1>
      <p>Age: {age} </p>
      <p>City: {city} </p>
      <p>Profession: {profession} </p>
    </div>
      
    </>
  )
}

export default Card