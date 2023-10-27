import React, { ReactNode } from "react"

type countProps = {
    // เป็นการโยนข้อมูล setCount มาเป็น number
    setCount : React.Dispatch<React.SetStateAction<number>>
    children : React.ReactNode;
}

const Counter = ({setCount,children }: countProps) => {
  
    return (
        <>
            <div>
                {/* <p>{children}</p> */}
                <h1>{children}</h1>
            </div>
            {/* <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button> */}
            <button onMouseOut={() => setCount(prev => prev + 1)}>Increment</button>
            <button onMouseOut={() => setCount(prev => prev - 1)}>Decrement</button>
            
        </>
    )
}

export default Counter
