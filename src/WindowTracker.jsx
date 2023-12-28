import React, { useEffect, useState } from 'react'

export const WindowTracker = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    /*
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function.
    */

    useEffect(() => {
        const handleResize = () =>{
           console.log("Setting up...")
           setWindowWidth(window.innerWidth)
       }
            // Add event listener on window
       window.addEventListener('resize', handleResize);
       
       return () => {
        console.log("Cleaning up...")
        // Cleanup function to remove event listener 
        window.removeEventListener('resize', handleResize)
        };

    },[])
    

  return (
    <>
    <h1>Window width: {windowWidth}</h1>
    </>
  )
}
