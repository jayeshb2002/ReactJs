import React, { useState } from 'react'

const StateDemo = () => {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])

    const handleIncr = () => {
        setCount((prev) => prev + 1)
        console.log("handleIncr event fired");
    }

    const handleDecr = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
        console.log("handleDecr event fired");
    }
    
    const handleBlur = (event) => {
        setList((prevList) => [...prevList, event.target.value]); 
        console.log(event.target.value);
        console.log("handleBlur event fired");
    }

  return (
        <div>
          <p>{count}</p>
          <p>
              Show List
          </p>
          <p>{ list }</p>
          <button onClick={handleIncr}>Increment</button>
          <button onClick={handleDecr}>Decrement</button>
          <input type="text" name='city' onBlur={handleBlur}></input>

        </div>
  )
}

export default StateDemo