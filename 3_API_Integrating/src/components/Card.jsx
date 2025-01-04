import React from 'react'

const Card = ({aName, downUrl}) => {
  return (
    <div className='border-blue-600 border-2 p-6'>
      <img src={downUrl} alt="" />
      <p className='text-2xl font-bold '>Author Name: {aName}</p>
      <p className='text-2xl font-bold mt-6'>Download Url: <a className='bg-blue-600 px-4 py-2 rounded-lg mt-4' href={downUrl}>Download</a></p>
    </div>
  )
}

export default Card