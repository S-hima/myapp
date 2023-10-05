import React, { useState } from 'react'

function Service() {
  const toggleValue= ()=>{
    
  }
  const [check,setCheck]= useState (true);
  return (
    <>
    <div>{check ?"true":"false"}
      </div>
      <button onClick={toggleValue}>
        Toggle
      </button>
      </>
  )
}

export default Service