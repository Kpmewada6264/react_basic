import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Kp from './kp.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// const ReactElement={
//     type: 'a',
//     props:{
//         href:'https://www.google.com',
//         target:'__blank',

//     },
//     children:'click me to visit google'
// }


// const ReactElement=React.createElement(
//   'a',
//   {href:'https://www.google.com', target:'__blank'},
//   'click me to visit google'
// )

// createRoot(document.getElementById('root')).render(
  
//   ReactElement
  
// )
const anotheruser="chai or code"

const ReactElement=React.createElement(
  'a',
  {href:'https://www.google.com', target:'__blank'},
  'click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  
  ReactElement
  
)
