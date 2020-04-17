import React, { useContext, Fragment } from 'react'
//Add store to it 
import { Store } from './Store'

//Add link from reach router..
import { Link } from '@reach/router'

 const App = ({
  children
}: {
  children: JSX.Element
   }): JSX.Element => {
   
   //add the state useContext(Store)
   const { state } = useContext(Store)
   
  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Money Heist</h1>
          <p>Pick your favourite episode😘</p>
        </div>
        {/* Add a div containing links */}
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {children}
    </Fragment>
  )
 }

export default App
