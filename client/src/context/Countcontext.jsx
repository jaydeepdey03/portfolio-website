/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const CountProvider = createContext()

const Countcontext = ({ children }) => {

    const [count, setCount] = useState(0);


    useEffect(()=> {
        async function showCount() {
            const count = await fetch('https://api.countapi.xyz/update/jaydeepdey03.vercel.app/jaydeep?amount=1')
            const data = await count.json();
            setCount(data.value)
        }

        showCount()
    }, [])

    return (
        <CountProvider.Provider value={{ count }} >
            {children}
        </CountProvider.Provider>
    )
}

export default Countcontext
