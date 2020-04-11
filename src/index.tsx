import React from 'react'
import ReactDom from 'react-dom'

export default function App():JSX.Element {
    const sum = (a:number, b:number): number => a + b
    
    return (
        <div>
            Hello Typescript {sum(24, 5)}
        </div>
    )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)