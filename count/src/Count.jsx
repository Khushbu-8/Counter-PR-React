import React from 'react'
import './style.css'

const Count = ({no,inc,dec,reset}) => {
  return (
    <div className='counts'>
      <h1>Counter App</h1>
      <h2>count : {no}</h2>
      <button className='plus' onClick={ () => inc()}>+</button>
      {
        no == 0 ?<button className='plus' disabled onClick={ () => dec()}>-</button>:<button className='plus' onClick={ () => dec()}>-</button>
      }
      
      <button className='plus' onClick={ () => reset()}>0</button>
    </div>

  )
}

export default Count
