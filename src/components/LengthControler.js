import React from 'react'

const LengthControler = ({ name, timeLength, increaseTimeLength, decreaseTimeLength }) => {
  return (
    <div id={`${name}-label`} className="col">
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)} Length</h3>
      <div className="d-flex justify-content-center align-items-end">
        <button 
          type="button" 
          className="btn d-inline-block" 
          id={`${name}-decrement`}
          onClick={() => decreaseTimeLength(name)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
          </svg>
        </button>
        <h2 id={`${name}-length`}>{timeLength}</h2>
        <button 
          type="button" 
          className="btn d-inline-block" 
          id={`${name}-increment`}
          onClick={() => increaseTimeLength(name)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default LengthControler