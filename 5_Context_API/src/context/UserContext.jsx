import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
  const username = "Sneha Roy"  //this username can be accessed by any component since we pass it to "App.jsx"

  return (
    <div>
      {/* here "App.jsx" is "children"  */}
      
      <DataContext.Provider value={username}>
        {children}    
      </DataContext.Provider>
    </div>
  )
}

export default UserContext