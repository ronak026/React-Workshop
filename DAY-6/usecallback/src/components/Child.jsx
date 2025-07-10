import React from 'react'

function Child(props) {
    console.log("child rendering")
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold text-purple-600 mb-2">Child Component</h1>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                onClick={props.Click}
            >
                Click
            </button>
        </div>
    )
}

export default React.memo(Child)