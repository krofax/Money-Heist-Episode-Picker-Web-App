import React, { useContext, Fragment } from 'react'
import { Store } from './Store'
import { Link } from '@reach/router'

 const App = ({
  children
}: {
  children: JSX.Element
   }): JSX.Element => {
   const { state } = useContext(Store)
   
  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Money Heist</h1>
          <p>Pick your favourite episode😘</p>
        </div>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/faves'>
            favourite
            <span className="Badge">
              {state.favourites.length}
            </span>
          </Link>
        </div>
      </header>
      {children}
    </Fragment>
  )
 }

export default App
