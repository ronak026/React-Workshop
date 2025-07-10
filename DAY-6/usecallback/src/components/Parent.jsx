import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    console.log("Parent rendering")
    const [count, setCount] = useState(0)
    let [childCount, setChildCount] = useState(0)

    const handleClick = useCallback(() =>{
        console.log("child value")
        setChildCount(prev => prev+1)
    },[])
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-96">
                <h1 className="text-2xl font-bold text-purple-700 mb-2">Parent Count: <span className="text-blue-700">{count}</span></h1>
                <h1 className="text-lg text-gray-700 mb-4">Child Click: <span className="font-semibold">{childCount}</span></h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-6"
                    onClick={() => setCount(count + 1)}
                >
                    Increment Parent
                </button>
                <Child Click={handleClick}/>
            </div>
        </div>
    )
}

export default Parent