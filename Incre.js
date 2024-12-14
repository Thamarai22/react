import {React ,useState} from 'react'

const Incre = () => {
    const [count,setCount]=useState(0);
  return (
 
  
  <div>
    <button onClick={()=>{setCount(count +1)}}>Increase</button>
    <p>{count}</p>
    <button onClick={()=>{setCount(count -1)}}>Decrese</button>
  </div>
  )
}

export default Incre
