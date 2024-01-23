import { useState } from "react";


export function Count(){
    // const[color,setColor]=useState(["Blue,Orange"])
    const[count,setCount]=useState(0)
    let reset=() => {
        setCount(0)
    }
    return(
        
        <>
        <h1 style={{color:"grey"}} >{count}</h1>
        {/* <h1 style={{color:"blue"}}>{color[0]}</h1> */}
        {/* <button type="button" style={{borderRadius:10,backgroundColor:"red",color:"white"}}  onClick={()=>setColor(['Red'])}>Change</button> */}
        <button type="button" style={{borderRadius:10,backgroundColor:"green",color:"white"}} onClick={()=>setCount(count+1)}>increment</button>
        <button type="button" style={{borderRadius:10,backgroundColor:"blue",color:"white"}}  onClick={()=>setCount(count-1)}>decrement</button>
        <button type="reset" style={{borderRadius:10,backgroundColor:"gray",color:"white"}}  onMouseOver={()=>reset(0)}>reset</button>

        </>
    )
}