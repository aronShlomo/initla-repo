import React, { useState, useEffect } from 'react';



const UseAffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('Hello')
        if (value >= 1) {
            document.title = `New Message(${value})`;            
        }
    });

    return( 
    <>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>Click Me</button>
    </>
    )};




export default UseAffectBasics
