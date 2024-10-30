import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'

const reducer = ((state,action) => {
    switch(action) {
        case "INCREMENT" :
            return state + 1 ;
        case "DECRIMENT" :
            return state - 1 ;
        case "ZERO" :
            return 0 ;
        default : 
            return state ;
    }
})



function App() {
    const [statee , setStatee] = useState(0)
   const [state , despatch] = useReducer(reducer , 0)
  return (
    <>
        <div>
        <h1 style={{color : "blue"}}>{state}</h1>
        <button onClick={ () => despatch("INCREMENT") }>Ingrement</button>
        <button onClick={ () => despatch("DECRIMENT") }>Decrement</button>
        <button onClick={ () => despatch("ZERO") }>Reset</button>
        </div>
   <br />
        <div>
        <h1 style={{color : "red"}}>{statee}</h1>
        <button onClick={ () => setStatee( statee + 1) }> Ingrement</button>
        <button onClick={ () => setStatee( statee -1) }> Decrement</button>
        <button onClick={ () => setStatee(0)}> Reset</button>
        </div>
    </>
  )
}
export default App


