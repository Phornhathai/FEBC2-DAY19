import React, { ReactNode } from "react"

type countProps = {
    setCount : React.Dispatch<React.SetStateAction<number>>
    children : React.ReactNode;
}

const Counter = ({setCount,children }: countProps) => {
  
    return (
        <>
            <div>
                <p>{children}</p>
            </div>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </>
    )
}

export default Counter
