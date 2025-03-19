import React, { useEffect, useState } from 'react'

const StateDemo = () => {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])

    // 2 arguments needed 3rd one is optional
    // useEffect(() => {
    //     //side effect action takes place
    //     return () => {}  //optional clean up function
    // },[]) // [] dependency array

    // to call useEffect only once
    // useEffect(() => {
    //     console.log('useEffect called')
    // },[])


    // to call it whenever count changes we have to put that count in dependecy array
    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [count]) // it will call useEffect when count changes
    
    // to call it whenever count changes we have to put that count in dependecy array
    // to use cleanup function 
    useEffect(() => {
        console.log('useEffect called')
        return () => { console.log('clean up called')}
    }, [count]) // it will call useEffect when count changes
    
    // without square bracket in useEffect, it will call useEffect on every render whenever anything changes
    // useEffect(() => {
    //     console.log('useEffect called')
    // }) 
    

    const handleIncr = () => {
        // it updates then and there even if we add 2-3 times this function it will execute all of them
        setCount((prev) => prev + 1)

        // it doesn't updates then and there if we add 2-3 times this function it will not execute all of them
        // setCount(count+1)
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