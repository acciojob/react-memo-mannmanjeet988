import React ,{useState} from "react"

const Counter = () =>{

    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>Count: {count}<button id="incr-cnt" onClick={()=>{setCount(count+1)}}>+</button></h1>
            <h3>Expensive Calculation</h3>
            <p>10000000</p>
            <hr />
            <hr />
        </div>
    )
}

export default Counter;