import  { useState } from 'react'

function useUpdation(val) {

    const[count,setCount]=useState(0)
    

    function increment(){
        setCount(count+val)

    }
    function decrement(){
        setCount(count-val)
    }

  return (
    {count,increment,decrement}
  )
}

export default useUpdation