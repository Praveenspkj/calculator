import React, { useState } from 'react'

const Calulator = () => {
    const [val,setVal]=useState(0)
    const [sym,setSym]=useState(null)//+=1,-->2,*->3,/->4,c->5
   
    const calculation=(numb)=>{
       switch(sym){
        case 1:
            setVal(val+numb);
            break;
        case 2:
            setVal(val-numb);
            break;
        case 3:
            setVal(val*numb);
            break;
        case 4:
            setVal(val/numb);
            break;

        
        default:
            setVal(0)     
       }
    }
    
    const clear=()=>{
        setSym(null);
        setVal(0);
      
    }
  return (
    <div>
        <input onChange={(e)=>setVal(Number(e.target.value))}  type='number' value={val}/>
        
        <button onClick={()=>setSym(1)}>+</button>
        <button onClick={()=>setSym(2)}>-</button>
        <button onClick={()=>setSym(3)}>*</button>
        <button onClick={()=>setSym(4)}>/</button>
        <button onClick={()=>clear()}>c</button>
        <button onClick={()=>calculation(1)}>1</button>
        <button onClick={()=>calculation(2)}>2</button>
        <button onClick={()=>calculation(3)}>3</button>
        <button onClick={()=>calculation(4)}>4</button>
        <button onClick={()=>calculation(5)}>5</button>
        <button onClick={()=>calculation(6)}>6</button>
        <button onClick={()=>calculation(7)}>7</button>
        <button onClick={()=>calculation(8)}>8</button>
        <button onClick={()=>calculation(9)}>9</button>

    </div>
  )
}

export default Calulator