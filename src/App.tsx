import React, { Fragment } from 'react'

 const App = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {

  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Money Heist</h1>
          <p>Pick your favourite episode😘</p>
        </div>
      </header>
      {children}
    </Fragment>
  )
 }

export default App
