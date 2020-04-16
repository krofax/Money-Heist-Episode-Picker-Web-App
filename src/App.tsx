import React, { useContext, Fragment } from 'react'
import { Store } from './Store'
import { Link } from '@reach/router'

export default function App({
  children
}: {
  children: JSX.Element
}): JSX.Element {
  const { state } = useContext(Store)

  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Money Heist</h1>
          <p>Pick your favourite episode😘</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {children}
    </Fragment>
  )
}
