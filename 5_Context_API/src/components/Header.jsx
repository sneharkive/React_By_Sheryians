import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext';

const Header = () => {

  const user = useContext(DataContext)
  
  return (
    <div>Header : {user} </div>
  )
}

export default Header