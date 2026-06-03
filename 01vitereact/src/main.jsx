import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>custom app </h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const AnotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotheruser = "garmi and paseena"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
