import React, { useState } from 'react'

const Calulator = () => {
    const [val,setVal]=useState(0)
    const [currIpt,setCurrIpt]=useState(0)
    const [sym,setSym]=useState(null)//+=1,-->2,*->3,/->4,c->5
   
    const calculation=()=>{
       switch(sym){
        case 1:
            setVal(currIpt+val);
            setCurrIpt(val)
            break;
        case 2:
            setVal(currIpt-val);
            setCurrIpt(val)
            break;
        case 3:
            setVal(currIpt*val);
            setCurrIpt(val)
            break;
        case 4:
            setVal(currIpt/val);
            setCurrIpt(val)
            break;

        
        default:
            setVal(0)     
       }
    }
    
  
  const add=()=>{
    setSym(1)
    setCurrIpt(val);
    setVal(0);
}
const sub=()=>{
    setSym(2)
    setCurrIpt(val);
    setVal(0);
}
const mul=()=>{
    setSym(3)
    setCurrIpt(val);
    setVal(0);
}
const div=()=>{
    setSym(4)
    setCurrIpt(val);
    setVal(0);
}
const clear=()=>{
    setSym(null);
    setVal(0);
    setCurrIpt(0)
  
}

  return (
    <div>
        <input onChange={(e)=>setVal(Number(e.target.value))}  type='number' value={val}/>
        
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>
        <button onClick={()=>clear()}>c</button>
        <button onClick={()=>setVal(val*10+1)}>1</button>
        <button onClick={()=>setVal(val*10+2)}>2</button>
        <button onClick={()=>setVal(val*10+3)}>3</button>
        <button onClick={()=>setVal(val*10+4)}>4</button>
        <button onClick={()=>setVal(val*10+5)}>5</button>
        <button onClick={()=>setVal(val*10+6)}>6</button>
        <button onClick={()=>setVal(val*10+7)}>7</button>
        <button onClick={()=>setVal(val*10+8)}>8</button>
        <button onClick={()=>setVal(val*10+9)}>9</button>
        <button onClick={calculation}>=</button>

    </div>
  )
}

export default Calulator